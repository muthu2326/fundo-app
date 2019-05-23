import React from 'react'
import img3 from '../../images/takeasign.jpg'

class CampaignCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            campaign: this.props.campaign,
            loaded: false
        }  
    }

    componentDidMount(){
      this.setState(() => ({ isLoaded: true}))
    }

    render(){
     console.log(this.state.loaded)
        return (
            <div class="col s4 m4 l3">
              <div class="card">
                <div class="card-image"> 
                  <img src={img3} />
                  <span class="card-title">{this.props.campaign.title}</span>
                </div>
                <div class="span-card">
                
                  <label ><i class="medium material-icons">account_circle</i>
                   
                  </label>
                  <label> By {this.state.campaign.user.username}</label>
                </div>
                <div class="card-content">
                <p class="">{this.props.campaign.description}</p>                 
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>           
        )
     }
} 

export default CampaignCard