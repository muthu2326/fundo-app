import React from 'react'
import img3 from '../../images/takeasign.jpg'

class CampaignCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            campaign: []
        }
    }

    render(){
        return (
            <div class="col s4 m4 l3">
              <div class="card">
                <div class="card-image">
                  <img src={img3} />
                  <span class="card-title">Card Title</span>
                </div>
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
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