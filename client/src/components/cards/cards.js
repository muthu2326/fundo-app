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
            <div className="col s4 m4 l3">
              <div className="card">
                <div className="card-image">
                  <img src={img3} alt="campaign show"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a>This is a link</a>
                </div>
              </div>
            </div>
        )
     }
}

export default CampaignCard