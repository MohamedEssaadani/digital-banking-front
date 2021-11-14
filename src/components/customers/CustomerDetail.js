import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCustomerById} from "../../actions/CustomersActions";
import {useHistory, useParams} from "react-router-dom";
import {CustomerAccounts} from "./CustomerAccounts";
import {Button} from "react-bootstrap";

export function CustomerDetail() {
    // get dispatch
    const dispatch = useDispatch()

    // history to navigate
    const history = useHistory()

    // useSelector to get customer detail
    const {loading, customer, error} = useSelector(state => state.customer)

    // get customer id from url using useParams() hook
    let {id} = useParams();

    useEffect(() => {
        // dispatch action getCustomerById()
        dispatch(getCustomerById(id))
    }, [dispatch, id])
    return (
        <>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-10 m-5">
                                <Button className={"btn btn-dark"}
                                        onClick={() => history.goBack()}>Back</Button>
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Détail Client : </h1>
                                    </div>
                                    <div className="form-group row ">
                                        <div className="col-sm-6 mb-3 mb-sm-0 pr-2 pb-2">
                                            <label><strong> Nom et Prénom: </strong> {customer.name}</label>
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0 pr-2 pb-2">
                                            <label><strong> Cin: </strong> {customer.cin}</label>
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0 pr-2 pb-2">
                                            <label><strong> Adresse: </strong> {customer.address}</label>
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0 pr-2 pb-2">
                                            <label><strong> Numéro de téléphone: </strong> {customer.phoneNumber}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <CustomerAccounts customerId={id}/>
        </>
    )
}