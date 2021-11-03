import {
    ACCOUNT_OPERATIONS_FAIL,
    ACCOUNT_OPERATIONS_REQUEST,
    ACCOUNT_OPERATIONS_SUCCESS
} from "../constants/OperationsConstants";

// Get operations of account reducer
export const operationsByAccountReducer = (state={ operations:[] }, action)=>{
    switch(action.type){
        case ACCOUNT_OPERATIONS_REQUEST:{
            return {
                loading: true, operations:[]
            }
        }
        case ACCOUNT_OPERATIONS_SUCCESS:{
            return {
                loading: false, operations: action.payload
            }
        }

        case ACCOUNT_OPERATIONS_FAIL:{
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}