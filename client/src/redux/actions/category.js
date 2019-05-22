import axios from '../../config/axios'

export const getCategory = (category) => {
  return {
    type : 'GET_CATEGORY',
    payload : category
  }
}

export const startGetCategory = () => {
  return (dispatch) => {
    axios.get('/category')
    .then(response => {
      dispatch(getCategory(response.data))
    })
  }
}