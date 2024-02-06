import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form"
import MemberReducer from './MemberReducer'

const rootReducer = combineReducers({
    members: MemberReducer,
    form: reduxForm
})

export default rootReducer;