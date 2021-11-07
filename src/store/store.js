import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {customersListReducer, getCustomerReducer, addNewCustomerReducer} from "../reducers/CustomersReducers";
import {accountsByCustomerReducer} from "../reducers/AccountsReducers";
import {operationsByAccountReducer} from "../reducers/OperationsReducers";

const reducer = combineReducers({
    // customer reducers
    customersList: customersListReducer,
    customer: getCustomerReducer,
    customerAccounts: accountsByCustomerReducer,
    accountOperations: operationsByAccountReducer,
    newCustomer: addNewCustomerReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
