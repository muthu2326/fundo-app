const campaignInitialState = []

const campaignReducer = (state = campaignInitialState, action) => {
    switch(action.type){
        case 'ADD_CAMPAIGN' :
            return [...state, ...action.payload]
        case 'GET_CAMPAIGN':
            return [...action.payload]
        default :
            return [...state]
    }
}

export default campaignReducer