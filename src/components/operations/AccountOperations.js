import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import {Table} from "react-bootstrap";
import * as moment from "moment";
import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOperationsByAccount} from "../../actions/OperationsActions";

export function AccountOperations(){
    // get dispatch
    const dispatch = useDispatch()

    // useSelector to get account operations
    const { loading, operations, error } = useSelector(state => state.accountOperations)

    const {id} = useParams()
    useEffect(()=>{
        // dispatch action getAccountOperations()
        dispatch(getOperationsByAccount(id))
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
                                        <FontAwesomeIcon icon={faUsers}/> Les opérations du compte : {id}
                                    </h1>

                                </div>
                                <div className={"form-group"}>
                                    <label >Filtrer par date: </label>
                                    {" "}<input type={"date"}/>
                                </div>
                                {
                                    loading ? (
                                        <Loader/>
                                    ) : error ? (
                                        <Message variant={"danger"} text={error}/>
                                    ) : (
                                        <Table className="table-sm" striped hover bordered responsive>
                                            <thead>
                                            <th>Date d'operation</th>
                                            <th>Montant</th>
                                            <th>Type d'operation</th>
                                            </thead>
                                            <tbody>
                                            {
                                                operations.map(op => {
                                                    return (
                                                        <tr key={operations.indexOf(op)}>
                                                            <td>{moment(new Date(op.operationDate)).format("DD/MM/YYYY")}</td>
                                                            <td>{op.amount}</td>
                                                            <td>{op.operationType}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </Table>

                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}