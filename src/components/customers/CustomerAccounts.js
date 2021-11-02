import {Table} from "react-bootstrap";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAccountsByCustomer} from "../../actions/AccountsActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export function CustomerAccounts(props) {
    // get dispatch
    const dispatch = useDispatch()

    // useSelector to get accounts list of customer
    const {loading, accounts, error} = useSelector(state => state.customerAccounts)


    useEffect(()=>{
        // dispatch action getAccountsByCustomer()
        dispatch(getAccountsByCustomer(props.customerId))
    }, [dispatch, props])
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-10 m-5">
                            <h1 className="h4 text-gray-900 mb-4">Comptes : </h1>
                            <Table className="table-sm" striped hover bordered responsive>
                                <thead>
                                <th>Numero de compte</th>
                                <th>Type de compte</th>
                                <th>Solde</th>
                                <th>Status</th>
                                <th></th>
                                </thead>
                                <tbody>
                                {
                                    accounts.map((account)=>{
                                        return (
                                          <tr key={accounts.indexOf(account)}>
                                              <td>{account.id}</td>
                                              <td>{account.accountStatus}</td>
                                              <td>{account.balance}</td>
                                              <td>{account.accountStatus}</td>
                                              <td>
                                                  <Link to={`/admin/accounts/${account.id}/operations`} className="btn btn-primary">
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
                </div>
            </div>
        </div>
    );
}