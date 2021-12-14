import {Button, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAccountsByCustomer, getAccountsByCustomerCin} from "../../actions/AccountsActions";
import * as React from "react";

export function SearchAccounts() {
    // get dispatch
    const dispatch = useDispatch()

    // init cin & numero de compte
    const [customerId, setCustomerId] = useState("")
    const [accountNumber, setAccountNumber] = useState("")

    //
    var {loading, accounts, error} = useSelector(state => state.customerAccounts)
    
    // history
    const history = useHistory()


    // search accounts
    const handleSearch = (e) => {
        e.preventDefault()
        if (customerId !== "" && accountNumber !== "") {
            // search accounts by customer Id & accountNumber

        } else if (customerId !== "" && accountNumber === "") {
            // search accounts by customer Id
            dispatch(getAccountsByCustomer(customerId))

        } else if (customerId === "" && accountNumber !== "") {
            // search accounts by accountNumber
        }
    }
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="p-5">
                                <Button className={"btn btn-dark"}
                                        onClick={() => history.goBack()}>Back</Button>

                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4"><FontAwesomeIcon
                                        icon={faSearch}/> Chercher des comptes</h1>
                                </div>
                                <form>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label>Par Client: </label>
                                        </div>
                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                            <input className={"form-control"}
                                                   type={"text"}
                                                   value={customerId}
                                                   onChange={(e) => setCustomerId(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label>Par Numéro de compte: </label>
                                        </div>
                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                            <input className={"form-control"}
                                                   type={"text"}
                                                   value={accountNumber}
                                                   onChange={(e) => setAccountNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-user btn-block"
                                            onClick={handleSearch}>
                                        <FontAwesomeIcon icon={faSearch}/> Rechercher
                                    </button>
                                </form>
                            </div>
                            {
                                accounts && accounts.length > 0 && (

                                    <div className="row">
                                        <div className="col-lg-12 m-5">
                                            <h1 className="h4 text-gray-900 mb-4">Comptes : </h1>
                                            <Table className="table-sm" striped hover bordered responsive>
                                                <thead>
                                                <th>Numero de compte</th>
                                                <th>Type de compte</th>
                                                <th>Solde</th>
                                                <th>Status</th>
                                                <th>Client</th>
                                                <th></th>
                                                </thead>
                                                <tbody>
                                                {
                                                    accounts.map((account) => {
                                                        return (
                                                            <tr key={accounts.indexOf(account)}>
                                                                <td>{account.id}</td>
                                                                <td>{account.accountType}</td>
                                                                <td>{account.balance}</td>
                                                                <td>{account.accountStatus}</td>
                                                                <td>{account.customer.name}</td>
                                                                <td>
                                                                    <Link to={`/admin/account/${account.id}/operations`}
                                                                          className="btn btn-primary">
                                                                        <FontAwesomeIcon icon={faEye}/>
                                                                        {" "}Opérations
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}