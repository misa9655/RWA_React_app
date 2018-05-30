import { combineReducers } from 'redux'
import appReducer from './appReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    posts: appReducer,
    form: formReducer
});

export default rootReducer;