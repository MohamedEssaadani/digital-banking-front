import {Sidebar} from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {CustomersList} from "./components/customers/CustomersList";
import {CustomerDetail} from "./components/customers/CustomerDetail";
import {AccountOperations} from "./components/operations/AccountOperations";
import {NewCustomer} from "./components/customers/NewCustomer";
import {EditCustomer} from "./components/customers/EditCustomer";
import {NewAccount} from "./components/accounts/NewAccount";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSignOutAlt, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import {LinkContainer} from "react-router-bootstrap";
import * as React from "react";
import UserService from "./services/UserService";
import {SearchAccounts} from "./components/accounts/SearchAccounts";

function App() {
    return (
        <div className="App">
            <Router>
                <div id="wrapper">
                    <Sidebar/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <button
                                    id="sidebarToggleTop"
                                    className="btn btn-link d-md-none rounded-circle mr-3"
                                >
                                    <i className="fa fa-bars"></i>
                                </button>

                                <ul className="navbar-nav ml-auto">
                                    <li className="d-inline-block ml-auto ml-md-3 my-2 my-md-0 mw-100 pt-2">
                                        <Dropdown className="nav-item">
                                            <Dropdown.Toggle className="btn btn-default"
                                                             style={{backgroundColor: "white", color: "black"}}>
                                                <FontAwesomeIcon icon={faUser}/>
                                                {"  "}{UserService.getUsername()}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={UserService.doLogout}>
                                                    <FontAwesomeIcon icon={faSignOutAlt}/>
                                                    {" "}<span> Déconnecter</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </li>
                                </ul>
                            </nav>
                            <Switch>
                                <Route path="/" exact/>
                                <Route path="/admin/customers" exact component={CustomersList}/>
                                <Route path="/admin/customers/:id/detail" component={CustomerDetail}/>
                                <Route path="/admin/account/:id/operations" component={AccountOperations}/>
                                <Route path="/admin/new-customer" component={NewCustomer}/>
                                <Route path="/admin/customers/:id/edit" component={EditCustomer}/>
                                <Route path="/admin/new-account" component={NewAccount}/>
                                <Route path="/admin/accounts" component={SearchAccounts}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
