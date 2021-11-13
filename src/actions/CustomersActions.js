import {
    ADD_CUSTOMER_FAIL,
    ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS,
    CUSTOMERS_LIST_FAIL,
    CUSTOMERS_LIST_REQUEST,
    CUSTOMERS_LIST_SUCCESS, GET_CUSTOMER_FAIL,
    GET_CUSTOMER_REQUEST, GET_CUSTOMER_SUCCESS
} from "../constants/CustomersConstants";
import axios from "axios";

// this action will get customers list from backend
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
// this action will get customer by id from backend
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


// Add new customer
export const addNewCustomer = (customer) => async(dispatch)=> {

    try{
        // dispatch action type ADD_CUSTOMER_REQUEST (to be used in loader)
        dispatch({
            type: ADD_CUSTOMER_REQUEST
        })

        const config = {
            headers: {
                //"Cache-Control": "no-cache",
                "content-type": "application/json",
               // "Access-Control-Allow-Origin": "*"
            }
        };

        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/CUSTOMER-SERVICE/api/customers`,
            customer,
            config)

        // dispatch action type ADD_CUSTOMER_SUCCESS after getting the customer
        dispatch({
            type: ADD_CUSTOMER_SUCCESS,
            payload: data
        })

    }catch(error){
        // if there is an error then dispatch action ADD_CUSTOMER_FAIL with the error message
        dispatch({
            type: ADD_CUSTOMER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
// Update customer

// Delete customer