import React from 'react'
import { connect } from 'react-redux'
import { StartRemoveUser } from '../../redux/actions/users'
class UserLogout extends React.Component {
  constructor(props){
    super(props)
    this.state={
      token:localStorage.getItem('token'),
      notice:''
    }
  }
  componentDidMount(){
  this.props.dispatch(StartRemoveUser(this.props)) 
  }
  render(){
    return(
      <div>
        <h2>Logout successfully</h2>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user :state.user
  }  
}
export default connect(mapStateToProps)(UserLogout)