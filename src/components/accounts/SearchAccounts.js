import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAccountsByCustomer, getAccountsByCustomerCin} from "../../actions/AccountsActions";

export function SearchAccounts() {
    // get dispatch
    const dispatch = useDispatch()

    // init cin & numero de compte
    const [customerId, setCustomerId] = useState("")
    const [accountNumber, setAccountNumber] = useState("")

    // history
    const history = useHistory()


    // search accounts
    const handleSearch = (e) => {
        e.preventDefault()
        if (customerId !== "" && accountNumber !== "") {
            // search accounts by customer CIN & accountNumber

        } else if (customerId !== "" && accountNumber === "") {
            // search accounts by customer CIN


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
                            {/*
                                 <Table className="table-sm" striped hover bordered responsive>
                                            <thead>
                                            <th>Nom</th>
                                            <th>CIN</th>
                                            <th>Date Naissance</th>
                                            <th>Adresse</th>
                                            <th>Telephone</th>
                                            <th>
                                                <Link
                                                    to={"/admin/new-customer"}
                                                    className="btn btn-success"
                                                >
                                                    <FontAwesomeIcon icon={faUserPlus}/>
                                                </Link>
                                            </th>
                                            </thead>
                                            <tbody>
                                            {
                                                customers.map(cust => {
                                                    return (
                                                        <tr key={customers.indexOf(cust)}>
                                                            <td>{cust.name}</td>
                                                            <td>{cust.cin}</td>
                                                            <td>{moment(new Date(cust.birthDate)).format("DD/MM/YYYY")}</td>
                                                            <td>{cust.address}</td>
                                                            <td>{cust.phoneNumber}</td>
                                                            <td>
                                                                <Link to={`/admin/customers/${cust.id}/detail`}
                                                                      className="btn btn-primary">
                                                                    <FontAwesomeIcon icon={faEye}/>
                                                                </Link>{" "}
                                                                <Link to={`/admin/customers/${cust.id}/edit`}
                                                                      className="btn btn-success">
                                                                    <FontAwesomeIcon icon={faEdit}/>
                                                                </Link>{" "}
                                                                <Button
                                                                    onClick={() => handleCustomerDelete(cust.id)}
                                                                    className="btn btn-danger">
                                                                    <FontAwesomeIcon icon={faTrash}/>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </Table>
                            */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}