import axios from "axios";
import {
    ADD_ACCOUNT_FAIL,
    ADD_ACCOUNT_REQUEST, ADD_ACCOUNT_SUCCESS, CUSTOMER_ACCOUNTS_FAIL,
    CUSTOMER_ACCOUNTS_REQUEST,
    CUSTOMER_ACCOUNTS_SUCCESS, GET_ACCOUNT_BY_ID_FAIL, GET_ACCOUNT_BY_ID_REQUEST, GET_ACCOUNT_BY_ID_SUCCESS
} from "../constants/AccountsConstants";
import UserService from "../services/UserService";

// this action will get accounts of customer from backend
export const getAccountsByCustomer = (id) => async (dispatch) => {
    try {
        // dispatch action type CUSTOMER_ACCOUNTS_REQUEST (to be used in loader)
        dispatch({
            type: CUSTOMER_ACCOUNTS_REQUEST
        })

        const {data} = await axios
            .get(`${process.env.REACT_APP_API_URL}/ACCOUNT-SERVICE/api/accounts/byCustomer/${id}`, {headers: {"Authorization": `Bearer ${UserService.getToken()}`}})

        // dispatch action type CUSTOMER_ACCOUNTS_SUCCESS after getting accounts of customer successfully
        dispatch({
            type: CUSTOMER_ACCOUNTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        // if there is an error then dispatch action CUSTOMERS_LIST_FAIL with the error message
        dispatch({
            type: CUSTOMER_ACCOUNTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Add new account action
export const addNewAccount = (account) => async (dispatch) => {

    try {
        // dispatch action type ADD_ACCOUNT_REQUEST (to be used in loader)
        dispatch({
            type: ADD_ACCOUNT_REQUEST
        })

        const config = {
            headers: {
                //"Cache-Control": "no-cache",
                "content-type": "application/json",
                "Authorization": `Bearer ${UserService.getToken()}`
                // "Access-Control-Allow-Origin": "*"
            }
        };

        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/ACCOUNT-SERVICE/api/accounts`,
            account,
            config)

        // dispatch action type ADD_ACCOUNT_SUCCESS after creating the customer
        dispatch({
            type: ADD_ACCOUNT_SUCCESS,
            payload: data
        })

    } catch (error) {
        // if there is an error then dispatch action ADD_ACCOUNT_FAIL with the error message
        dispatch({
            type: ADD_ACCOUNT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Get Account By Id Action
export const getAccountById = (id) => async (dispatch) => {
    try {
        // dispatch action type CUSTOMER_ACCOUNTS_REQUEST (to be used in loader)
        dispatch({
            type: GET_ACCOUNT_BY_ID_REQUEST
        })

        const {data} = await axios
            .get(`${process.env.REACT_APP_API_URL}/ACCOUNT-SERVICE/api/accounts/${id}`, {headers: {"Authorization": `Bearer ${UserService.getToken()}`}})

        // dispatch action type GET_ACCOUNT_BY_ID_ after getting accounts of customer successfully
        dispatch({
            type: GET_ACCOUNT_BY_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        // if there is an error then dispatch action GET_ACCOUNT_BY_ID_FAIL with the error message
        dispatch({
            type: GET_ACCOUNT_BY_ID_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
