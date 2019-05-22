import React from 'react';
import { connect } from "react-redux"
import { startAddCampaign } from '../../redux/actions/campaign';
import { startGetCategory } from '../../redux/actions/category';

class newCampaign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            description : '',
            briefStory : '',
            targetAmount : '',
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : this.state.title,
            description : this.state.description,
            briefStory : this.state.briefStory,
            targetAmount : this.state.targetAmount
        }
        console.log(formData)
        this.props.dispatch(startAddCampaign(formData, this.props))
    }
    render(){
        return (
            <div>
                <h2> Start Campaign here</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Campaign Title :
                        <input type="text" value ={this.state.title} onChange={this.handleChange} name='title'/>
                    </label>
                    <br/>
                    <label>Description:
                        <input type="text" value ={this.state.description} onChange={this.handleChange} name='description'/>
                    </label>
                    <br/>
                    <label>Brief Story :
                        <input type="text" value ={this.state.briefStory} onChange={this.handleChange} name='briefStory'/>
                    </label>
                    <br/>
                    <label>Target Amount :
                        <input type="text" value ={this.state.targetAmount} onChange={this.handleChange} name='targetAmount'/>
                    </label>
                    <br/>
                    <input type="submit"/>
                </form>
                <button>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.category)
    return {
        campaign : state.campaign,
        category : state.category
    }
}

export default connect(mapStateToProps)(newCampaign)