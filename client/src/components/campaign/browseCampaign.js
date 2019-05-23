import React from 'react'
import {connect} from 'react-redux'
import { startGetCategory } from '../../redux/actions/category';
import { startGetCampaign } from '../../redux/actions/campaign';


class BrowseCampaign extends React.Component{
    
    componentDidMount(){
        this.props.dispatch(startGetCategory())
        this.props.dispatch(startGetCampaign())
    }

    render(){
        return (
            <div>
                <h4>category</h4>
                <ul>
                    {
                        this.props.category.map(categ=> {
                            return (
                                <div key={categ.id}>
                                    <li >{categ.categoryName}</li>
                                </div>
                            )
                        })
                    }
                </ul>
                <br/>
                <h4>All campaigns</h4>
                <ul>
                    {
                        this.props.campaigns.map(campaign=> {
                            return (
                                <li key={campaign.id}>{campaign.title}</li>
                            )
                        })
                    }
                </ul>
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

export default connect(mapStateToProps)(BrowseCampaign)
