import axios from '../../config/axios'


//login
export const startAddUser = (formData, props) => {
    console.log(formData)
    return(dispatch) => {
        axios.post('/users/login', formData)
        .then(response => {
            axios.defaults.headers['x-auth'] = response.data.token
            localStorage.setItem('token', response.data.token)
            dispatch(addUser(response.data.user))
            props.props.history.push('/')
        })
        .catch(err=>console.log(err))
    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        axios.get('/users/account')
        .then(response => {
            dispatch(addUser(response.data))
        })
    }
}

export const addUser = (user) => {
    return {
        type : 'ADD_USER',
        payload : user
    }
}

//logout
export const StartRemoveUser = (props) => {
    console.log('logout called',props)
    return (dispatch) => {
        axios.delete('/users/logout')
        .then(response => {
            console.log(props.history.push('/users/register'))
            dispatch(removeUser())
            localStorage.clear()
            props.history.push('/users/login')
        })
        .catch(err => console.log(err))
    }    
}


export const removeUser =() => {
    return {
        type:'REMOVE_USER',
        payload:{}
    }
}