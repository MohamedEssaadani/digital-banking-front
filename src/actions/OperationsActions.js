import axios from "axios";
import {
    ACCOUNT_OPERATIONS_FAIL,
    ACCOUNT_OPERATIONS_REQUEST,
    ACCOUNT_OPERATIONS_SUCCESS
} from "../constants/OperationsConstants";


// this action will get operations of account from backend
export const getOperationsByAccount = (id) => async(dispatch) => {
    try{
        // dispatch action type ACCOUNT_OPERATIONS_REQUEST (to be used in loader)
        dispatch({
            type: ACCOUNT_OPERATIONS_REQUEST
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/OPERATION-SERVICE/api/operations/byAccount/${id}`)

        // dispatch action type ACCOUNT_OPERATIONS_SUCCESS after getting operations of account successfully
        dispatch({
            type: ACCOUNT_OPERATIONS_SUCCESS,
            payload: data
        })
    }catch(error){
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