import {Sidebar} from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {CustomersList} from "./components/customers/CustomersList";

function App() {
  return (
    <div className="App">
        <Router>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button
                                id="sidebarToggleTop"
                                className="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i className="fa fa-bars"></i>
                            </button>
                        </nav>
                        <Switch>
                            <Route path="/"  exact />
                            <Route path="/admin/clients"  component={CustomersList} />
                            <Route
                                path="/admin"
                                render={({ match: { url } }) => (
                                    <>
                                        <Route
                                            path={`${url}`}
                                        />
                                    </>
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
