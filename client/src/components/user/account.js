import React from 'react';
import { connect } from 'react-redux'
import img from '../../images/group-img.jpg'

const UserAccount = (props) => {

    const row_div = {
        padding: '10px',
        background: '#ddd',
        border: '1px solid #fff'
    }

    const row = {
        margin: '20px',
    }
    return (
        <React.Fragment>

        <div class="row" style = {row}>
            <div class="col s6 m6" style = {row_div} >
            <div class="col m2">
            <img src={img} alt="..." className="rounded" />
            </div>
            </div>
            <div class="col s6 m6" style = {row_div}>content</div>
        </div>
        
        </React.Fragment>   
    )          
}



const mapStateToProps = (state) => {
  
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(UserAccount)