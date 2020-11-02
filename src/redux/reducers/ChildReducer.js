// need to redeploy from my personal repository
import {
    GET_CHILDREN_STARTED,
    GET_CHILDREN_SUCCESS,
    GET_CHILDREN_ERROR
} from '../actions/ChildAction'
const initialState = {
    children: [],
    child: {
        name: "",
        age: 0,
        weight: "",
        user_id: 0
    },
    isLoading: false,
    loaded: false,
    error: ""
}

export const ChildReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_CHILDREN_STARTED:
            return {
                ...state,
                isLoading: true,
                loaded: false,
                error: ""
            }
        case GET_CHILDREN_SUCCESS:
            return {
                ...state,
                children: action.payload,
                isLoading: false,
                loaded: true,
                error: ""
            }
        case GET_CHILDREN_ERROR:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                error: action.payload.message
            }
        default:
            return state
    }
}
