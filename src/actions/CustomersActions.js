import {
    CUSTOMERS_LIST_FAIL,
    CUSTOMERS_LIST_REQUEST,
    CUSTOMERS_LIST_SUCCESS, GET_CUSTOMER_FAIL,
    GET_CUSTOMER_REQUEST, GET_CUSTOMER_SUCCESS
} from "../constants/CustomersConstants";
import axios from "axios";

// this function will get customers list from backend
export const getCustomersList = () => async(dispatch) => {
    try{
        // dispatch action type CUSTOMERS_LIST_REQUEST (to be used in loader)
        dispatch({
            type: CUSTOMERS_LIST_REQUEST
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/CUSTOMER-SERVICE/api/customers`)

        // dispatch action type CUSTOMERS_LIST_SUCCESS after getting the customers list
        dispatch({
            type: CUSTOMERS_LIST_SUCCESS,
            payload: data
        })
        console.log(data)
    }catch(error){
        // if there is an error then dispatch action CUSTOMERS_LIST_FAIL with the error message
        dispatch({
            type: CUSTOMERS_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
// this function will get customer by id from backend
export const getCustomerById= (id) => async (dispatch)=>{
    try{
        // dispatch action type GET_CUSTOMER_REQUEST (to be used in loader)
        dispatch({
            type: GET_CUSTOMER_REQUEST
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/CUSTOMER-SERVICE/api/customers/${id}`)

        // dispatch action type CUSTOMERS_LIST_SUCCESS after getting the customer
        dispatch({
            type: GET_CUSTOMER_SUCCESS,
            payload: data
        })

    }catch(error){
        // if there is an error then dispatch action GET_CUSTOMER_FAIL with the error message
        dispatch({
            type: GET_CUSTOMER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Get Customer


// Add new customer

// Update customer

// Delete customer