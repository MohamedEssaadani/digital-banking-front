import {
    ADD_ACCOUNT_FAIL,
    ADD_ACCOUNT_REQUEST,
    ADD_ACCOUNT_SUCCESS,
    CUSTOMER_ACCOUNTS_BY_CIN_FAIL,
    CUSTOMER_ACCOUNTS_BY_CIN_REQUEST,
    CUSTOMER_ACCOUNTS_BY_CIN_SUCCESS,
    CUSTOMER_ACCOUNTS_FAIL,
    CUSTOMER_ACCOUNTS_REQUEST,
    CUSTOMER_ACCOUNTS_SUCCESS, GET_ACCOUNT_BY_ID_REQUEST, GET_ACCOUNT_BY_ID_SUCCESS
} from "../constants/AccountsConstants";
import {GET_CUSTOMER_FAIL} from "../constants/CustomersConstants";

// Get Accounts of customer BY ID reducer
export const accountsByCustomerReducer = (state = {accounts: []}, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNTS_REQUEST: {
            return {
                loading: true, accounts: []
            }
        }
        case CUSTOMER_ACCOUNTS_SUCCESS: {
            return {
                loading: false, accounts: action.payload
            }
        }

        case CUSTOMER_ACCOUNTS_FAIL: {
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}

// Get Accounts By id reducer
export const accountsByIdReducer = (state = {accounts: []}, action) => {
    switch (action.type) {
        case GET_ACCOUNT_BY_ID_REQUEST: {
            return {
                loading: true, accounts: []
            }
        }
        case GET_ACCOUNT_BY_ID_SUCCESS: {
            return {
                loading: false, accounts: action.payload
            }
        }

        case GET_CUSTOMER_FAIL: {
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}

// Add new account reducer
export const addNewAccountReducer = (state = {account: {}}, action) => {
    switch (action.type) {
        case ADD_ACCOUNT_REQUEST:
            return {loading: true};

        case ADD_ACCOUNT_SUCCESS:
            return {loading: false, account: action.payload};

        case ADD_ACCOUNT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};