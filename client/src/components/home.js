import React from 'react';
import { Carousel } from 'react-materialize'
import img1 from '../images/group-img.jpg'
import img2 from '../images/makeachange.jpg'
import img3 from '../images/takeasign.jpg'
import Footer from './footer/footer'
import CampaignCard from './cards/cards'

import {connect} from 'react-redux'
import { startGetCategory } from '../redux/actions/category';
import { startGetCampaign } from '../redux/actions/campaign';

class Home extends React.Component{
    componentDidMount(){
        this.props.dispatch(startGetCategory())
        this.props.dispatch(startGetCampaign())
    }
    render(){
        console.log('campaigns', this.props.campaigns)
        return(
            <div>
                <Carousel options={{fullWidth: true,indicators: true, duration: 3}} images={[
                        img1,img2,img3
                    ]} />
                        
                        <div className="container">
                        <h3>Trending Campigns</h3>
                        <div class="row">
                        {
                        this.props.campaigns.map(campaign=> {
                            return (
                                <CampaignCard  key={campaign._id} campaign={campaign} />
                            )
                        })
                    }
                        </div>
                        </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campaigns : state.campaign,
        category : state.category
    }
}

export default connect(mapStateToProps)(Home)