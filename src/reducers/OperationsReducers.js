import {
    ACCOUNT_OPERATIONS_FAIL,
    ACCOUNT_OPERATIONS_REQUEST,
    ACCOUNT_OPERATIONS_SUCCESS, ADD_OPERATION_FAIL, ADD_OPERATION_REQUEST, ADD_OPERATION_SUCCESS
} from "../constants/OperationsConstants";

// Get operations of account reducer
export const operationsByAccountReducer = (state = {operations: []}, action) => {
    switch (action.type) {
        case ACCOUNT_OPERATIONS_REQUEST: {
            return {
                loading: true, operations: []
            }
        }
        case ACCOUNT_OPERATIONS_SUCCESS: {
            return {
                loading: false, operations: action.payload
            }
        }

        case ACCOUNT_OPERATIONS_FAIL: {
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}


// add new operation reducer
export const newOperationReducer = (state = {operation: []}, action) => {
    switch (action.type) {
        case ADD_OPERATION_REQUEST: {
            return {
                loading: true, operation: []
            }
        }
        case ADD_OPERATION_SUCCESS: {
            return {
                loading: false, operation: action.payload
            }
        }

        case ADD_OPERATION_FAIL: {
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}