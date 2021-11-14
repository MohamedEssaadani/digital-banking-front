import {
    ADD_CUSTOMER_FAIL,
    ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS,
    CUSTOMERS_LIST_FAIL,
    CUSTOMERS_LIST_REQUEST,
    CUSTOMERS_LIST_SUCCESS, GET_CUSTOMER_FAIL,
    GET_CUSTOMER_REQUEST, GET_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAIL, UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS
} from "../constants/CustomersConstants";

// customers list reducer
export const customersListReducer = (state = {customers: []}, action) => {
    switch (action.type) {
        case CUSTOMERS_LIST_REQUEST: {
            return {
                loading: true, customers: []
            }
        }
        case CUSTOMERS_LIST_SUCCESS: {
            return {
                loading: false, customers: action.payload
            }
        }

        case CUSTOMERS_LIST_FAIL: {
            return {
                loading: false, error: action.payload
            }
        }
        default:
            return state
    }
}

// Get customer reducer
export const getCustomerReducer = (state = {customer: {}}, action) => {
    switch (action.type) {
        case GET_CUSTOMER_REQUEST: {
            return {
                loading: true, customer: []
            }
        }
        case GET_CUSTOMER_SUCCESS: {
            return {
                loading: false, customer: action.payload
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

// Add new customer reducer
export const addNewCustomerReducer = (state = {customer: {}}, action) => {
    switch (action.type) {
        case ADD_CUSTOMER_REQUEST:
            return {loading: true};

        case ADD_CUSTOMER_SUCCESS:
            return {loading: false, customer: action.payload};

        case ADD_CUSTOMER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};
// Edit customer reducer
export const updateCustomerReducer = (state = {customer: {}}, action) => {
    switch (action.type) {
        case UPDATE_CUSTOMER_REQUEST:
            return {loading: true};

        case UPDATE_CUSTOMER_SUCCESS:
            return {loading: false, customer: action.payload};

        case UPDATE_CUSTOMER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};
