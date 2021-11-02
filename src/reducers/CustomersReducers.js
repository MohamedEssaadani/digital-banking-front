import {
    CUSTOMERS_LIST_FAIL,
    CUSTOMERS_LIST_REQUEST,
    CUSTOMERS_LIST_SUCCESS, GET_CUSTOMER_FAIL,
    GET_CUSTOMER_REQUEST, GET_CUSTOMER_SUCCESS
} from "../constants/CustomersConstants";

// customers list reducer
export const customersListReducer = (state={ customers:[] }, action)=>{
    switch(action.type){
        case CUSTOMERS_LIST_REQUEST:{
            return {
                loading: true, customers:[]
            }
        }
        case CUSTOMERS_LIST_SUCCESS:{
            return {
                loading: false, customers: action.payload
            }
        }

        case CUSTOMERS_LIST_FAIL:{
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}

// Get customer reducer
export const getCustomerReducer = (state={ customer:{} }, action)=>{
    switch(action.type){
        case GET_CUSTOMER_REQUEST:{
            return {
                loading: true, customer:[]
            }
        }
        case GET_CUSTOMER_SUCCESS:{
            return {
                loading: false, customer: action.payload
            }
        }

        case GET_CUSTOMER_FAIL:{
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}


// Add new customer reducer

// Edit customer reducer

// Delete customer reducer