import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/users'
import campaignReducer from '../reducers/campaign';
import categoryReducer from '../reducers/category';

const configureStore = () => {
    const store = createStore(combineReducers({
        user : usersReducer,
        campaign : campaignReducer,
        category : categoryReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore