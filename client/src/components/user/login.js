import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { startAddUser } from '../../redux/actions/users';
import '../../App.css';

class UserLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '', 
            notice: '',
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        this.props.dispatch(startAddUser(formData, this.props))
    }

    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/home"/>
        }
        return (
            <div className="auth-body">
                <div class="row">
                    <div class="col s6 offset-s4">
                        <div class="col s12 m8">
                            <div class="card depth-z">
                                <div class="card-stacked">
                                    <div class="card-content">
                                        <h2 className="card-txt">Login</h2>
                                        { this.state.notice && this.state.notice }
                                        <form onSubmit={this.handleSubmit}>
                                            <div>
                                                Email
                                                <input type="text" value={this.state.email}  
                                                onChange={this.handleChange} name="email" placeholder='abc@gmail.com'/>
                                            </div>
                                            <div>
                                                Password
                                                <input type="password" value={this.state.password} 
                                                placeholder="********" onChange={this.handleChange} name="password" />  
                                            </div>
                                            <br/>
                                            <Link id="forgot-password">Forgot password?</Link>
                                            <button id="button-login" type="submit" class="waves-effect waves-light btn green">Login</button>
                                            <span className="new-fundo">New to Fundo?</span><Link to='/users/register'>Register</Link>
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

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(UserLogin)