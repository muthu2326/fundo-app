import React from 'react';
import { Carousel } from 'react-materialize'
import img1 from '../images/group-img.jpg'
import img2 from '../images/makeachange.jpg'
import img3 from '../images/takeasign.jpg'


import Footer from './footer/footer'
import CampaignCard from './cards/cards'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Carousel options={{fullWidth: true,indicators: true, duration: 3}} images={[
                        img1,img2,img3
                    ]} />
                        
                        <div className="container">
                        <h3>Trending Campigns</h3>
                        <div class="row">
                        {
                            [1,2,3,4].map(num => {
                                return (                                 
                                    <CampaignCard />
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

export default Home