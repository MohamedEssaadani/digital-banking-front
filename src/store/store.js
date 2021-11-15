import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
    customersListReducer,
    getCustomerReducer,
    addNewCustomerReducer,
    updateCustomerReducer
} from "../reducers/CustomersReducers";
import {accountsByCustomerReducer, addNewAccountReducer} from "../reducers/AccountsReducers";
import {operationsByAccountReducer} from "../reducers/OperationsReducers";

const reducer = combineReducers({
    // customer reducers
    customersList: customersListReducer,
    customer: getCustomerReducer,
    customerAccounts: accountsByCustomerReducer,
    createdCustomer: addNewCustomerReducer,
    updatedCustomer: updateCustomerReducer,
    // account reducers
    createdAccount: addNewAccountReducer,
    // operations reducers
    accountOperations: operationsByAccountReducer,

});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
