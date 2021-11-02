import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faEye, faTrash, faUserPlus, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Button, Table} from "react-bootstrap";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCustomersList} from "../../actions/CustomersActions";
import * as moment from 'moment'
import {Link} from "react-router-dom";

export function CustomersList() {
    // get dispatch
    const dispatch = useDispatch()

    // useSelector to get customers list
    const { loading, customers, error } = useSelector(state => state.customersList)

    useEffect(()=>{
        // dispatch action customersList()
        dispatch(getCustomersList())
    }, [dispatch])
    return (
        <>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-10 m-5">
                <div className="d-sm-flex align-items-center justify-content-center mb-4">
                    <h1 className="h3 mb-0 text-gray-800">
                        {" "}
                        <FontAwesomeIcon icon={faUsers}/> Liste des clients
                    </h1>
                </div>
            <Table className="table-sm" striped hover bordered responsive>
                <thead>
                <th>Nom</th>
                <th>CIN</th>
                <th>Date Naissance</th>
                <th>Adresse</th>
                <th>Telephone</th>
                <th>
                    <Button
                        className="btn btn-success"
                    >
                        <FontAwesomeIcon icon={faUserPlus}/>
                    </Button>
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
                                    <Link to={`/admin/customers/${cust.id}/detail`} className="btn btn-primary">
                                        <FontAwesomeIcon icon={faEye}/>
                                    </Link>{" "}
                                    <Link to={`/admin/customers/${cust.id}/edit`} className="btn btn-success">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Link>{" "}
                                    <Link to={`/admin/customers/${cust.id}/delete`} className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrash}/>
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
        </>
    )
}