import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {customersListReducer, getCustomerReducer} from "../reducers/CustomersReducers";
import {accountsByCustomerReducer} from "../reducers/AccountsReducers";

const reducer = combineReducers({
    // customer reducers
    customersList: customersListReducer,
    customer: getCustomerReducer,
    customerAccounts: accountsByCustomerReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
