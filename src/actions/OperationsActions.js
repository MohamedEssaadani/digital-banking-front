import axios from "axios";
import {
    ACCOUNT_OPERATIONS_FAIL,
    ACCOUNT_OPERATIONS_REQUEST,
    ACCOUNT_OPERATIONS_SUCCESS,
    ADD_OPERATION_FAIL,
    ADD_OPERATION_REQUEST,
    ADD_OPERATION_SUCCESS
} from "../constants/OperationsConstants";
import UserService from "../services/UserService";


// this action will get operations of account from backend
export const getOperationsByAccount = (id) => async (dispatch) => {
    try {
        // dispatch action type ACCOUNT_OPERATIONS_REQUEST (to be used in loader)
        dispatch({
            type: ACCOUNT_OPERATIONS_REQUEST
        })

        const {data} = await axios
            .get(`${process.env.REACT_APP_API_URL}/OPERATION-SERVICE/api/operations/byAccount/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${UserService.getToken()}`
                    }
                })

        // dispatch action type ACCOUNT_OPERATIONS_SUCCESS after getting operations of account successfully
        dispatch({
            type: ACCOUNT_OPERATIONS_SUCCESS,
            payload: data
        })
    } catch (error) {
        // if there is an error then dispatch action ACCOUNT_OPERATIONS_FAIL with the error message
        dispatch({
            type: ACCOUNT_OPERATIONS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Add new operation action
export const addNewOperation = (operation) => async (dispatch) => {

    try {
        // dispatch action type ADD_OPERATION_REQUEST (to be used in loader)
        dispatch({
            type: ADD_OPERATION_REQUEST
        })

        const config = {
            headers: {
                //"Cache-Control": "no-cache",
                "content-type": "application/json",
                // "Access-Control-Allow-Origin": "*"
            }
        };

        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/OPERATION-SERVICE/api/operations`,
            operation,
            config)

        // dispatch action type ADD_OPERATION_SUCCESS after creating the customer
        dispatch({
            type: ADD_OPERATION_SUCCESS,
            payload: data
        })

    } catch (error) {
        // if there is an error then dispatch action ADD_OPERATION_FAIL with the error message
        dispatch({
            type: ADD_OPERATION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
