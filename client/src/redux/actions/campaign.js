import axios from '../../config/axios'
export const addCampaign = (campaign) => {
  return {
  type : 'ADD_CAMPAIGN',
  payload : campaign
}}

export const startAddCampaign = (formData, props) => {
  return(dispatch) => {
    axios.post('/campaign/new', formData)
    .then(response => {
      console.log(response.data)
      dispatch(addCampaign(response.data))
    })
    .catch(err=>console.log(err))
    }
}

export const getCampaign =(campaign) => {
  return {
    type : "GET_CAMPAIGN",
    payload : campaign
  }
}

export const startGetCampaign = () => {
  return(dispatch) => {
    axios.get('/campaign/campaigns-list')
    .then(response => {
      console.log(response.data)
      dispatch(getCampaign(response.data))
    })
  }
}