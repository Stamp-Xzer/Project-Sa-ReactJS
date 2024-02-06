import axios from "axios";
import { MEMBERS_FETCH, MEMBER_CREATE, MEMBER_UPDATE, MEMBER_FETCH } from "./types";
export const memberFetch = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/members/" + id).then(
            res => {
                dispatch({ type: MEMBER_FETCH, payload: res.data });
            }
        )
    }
}
export const membersFetch = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/members" ).then(
            res => {
                dispatch({ type: MEMBERS_FETCH, payload: res.data });
            }
        )
    }
}
export const memberDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/members/" + id).then(res => {
            axios.get(process.env.REACT_APP_API_URL + "/members" ).then(
                res => {
                    dispatch({ type: MEMBERS_FETCH, payload: res.data })
                })
        })
    }
}
export const memberCreate = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/members" , values).then(
            res => {
                dispatch({ type: MEMBER_CREATE })
            }
        )
    }
}
export const memberUpdate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + "/members/" + id , values).then(res => {
            dispatch({ type: MEMBER_UPDATE })
        })
    }
}