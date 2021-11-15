import {
    ADD_ACCOUNT_FAIL,
    ADD_ACCOUNT_REQUEST, ADD_ACCOUNT_SUCCESS,
    CUSTOMER_ACCOUNTS_FAIL,
    CUSTOMER_ACCOUNTS_REQUEST,
    CUSTOMER_ACCOUNTS_SUCCESS
} from "../constants/AccountsConstants";

// Get Accounts of customer reducer
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