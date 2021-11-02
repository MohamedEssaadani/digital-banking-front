
import {
    CUSTOMER_ACCOUNTS_FAIL,
    CUSTOMER_ACCOUNTS_REQUEST,
    CUSTOMER_ACCOUNTS_SUCCESS
} from "../constants/AccountsConstants";

// Get Accounts of customer reducer
export const accountsByCustomerReducer = (state={ accounts:[] }, action)=>{
    switch(action.type){
        case CUSTOMER_ACCOUNTS_REQUEST:{
            return {
                loading: true, accounts:[]
            }
        }
        case CUSTOMER_ACCOUNTS_SUCCESS:{
            return {
                loading: false, accounts: action.payload
            }
        }

        case CUSTOMER_ACCOUNTS_FAIL:{
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}