import axios from "axios";
import {CUSTOMER_ACCOUNTS_REQUEST, CUSTOMER_ACCOUNTS_SUCCESS} from "../constants/AccountsConstants";
import {CUSTOMERS_LIST_FAIL} from "../constants/CustomersConstants";

// this action will get accounts of customer from backend
export const getAccountsByCustomer = (id) => async(dispatch) => {
    try{
        // dispatch action type CUSTOMER_ACCOUNTS_REQUEST (to be used in loader)
        dispatch({
            type: CUSTOMER_ACCOUNTS_REQUEST
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/ACCOUNT-SERVICE/api/accounts/byCustomer/${id}`)

        // dispatch action type CUSTOMER_ACCOUNTS_SUCCESS after getting accounts of customer successfully
        dispatch({
            type: CUSTOMER_ACCOUNTS_SUCCESS,
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