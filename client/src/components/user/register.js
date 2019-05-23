import React from 'react';
import axios from '../../config/axios';
import '../../App.css';

class UserRegister extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '', 
            email: '', 
            password: '', 
            notice: '',
            confirmPassword : '',
            isChecked:false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        const { password, confirmPassword } = this.state
        if( password === confirmPassword ){
            axios.post('/users/register', formData)
            .then((response) => {
                if(response.data.message){
                    this.setState(() => ({
                        notice: response.data.message
                    }))
                }
                else{
                    this.setState(() => ({
                        username: '', email: '', password: '', confirmPassword : '', 
                        notice: 'successfully registered'
                    }))
                    setTimeout(() => {
                        this.props.history.push('/users/login')
                    }, 2000)
                }
            })
            .catch(err => console.log(err))
        }
        
    }

    handleChange = (e) =>{
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    handleCheck =(e) =>{
        const isChecked = e.target.checked
        this.setState(() => ({isChecked}))
    }
    
    render(){
        return(
            <div className="auth-body">
                <div class="row offset-s1">
                <div class="col s6 offset-s1">
                    <h2 className="main-txt">We are here to help you</h2>
                </div>
                <div class="col s6 offset-s8">
                    <div class="col s12 m7">
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <form onSubmit={this.handleSubmit}>
                                        <h5 className="card-txt">Register</h5>
                                        <p align='center'>{ this.state.notice && this.state.notice }</p>
                                            <div>
                                                Username
                                                <input type='text' onChange={this.handleChange} name='username' placeholder='abc'/>
                                            </div>
                                            <div >
                                                Email
                                                <input type='text' 
                                                onChange={this.handleChange}
                                                name='email' placeholder='abc@gmail.com'/>
                                            </div>
                                            <div >
                                                Password
                                                <input type={this.state.isChecked ? 'text' : 'password'} onChange={this.handleChange} name='password' placeholder='************'/>
                                            </div>
                                            <div >
                                                Confirm Password
                                                <input type={this.state.isChecked ? 'text' : 'password'} onChange={this.handleChange} name='confirmPassword' placeholder='************'/>
                                            </div>
                                            <br/>
                                            <label>
                                                <input type="checkbox"
                                                value = {this.state.isChecked} onChange = {this.handleCheck} /><span>Show password</span>
                                            </label>
                                            <br/>
                                            <br/>
                                            <button type="submit" class="waves-effect waves-light btn blue">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                </div>
            </div>               
        )
    }
}

export default UserRegister