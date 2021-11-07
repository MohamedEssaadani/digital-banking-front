import {faSave, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewCustomer} from "../../actions/CustomersActions";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Loader from "../shared/Loader";
import Message from "../shared/Message";

export function NewCustomer() {
    // init variables
    const [name, setName] = useState('')
    const [cin, setCin] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthDate, setBirthDate] = useState('')

    // dispatch
    const dispatch = useDispatch()

    // history to redirect the user to the customers list after adding new customer
    const history = useHistory()

    const {loading, error, customer} = useSelector(state => state.newCustomer)


    const handleSubmit = () => {
        const customer = {
            name,
            birthDate,
            cin,
            address,
            phoneNumber
        }
        dispatch(addNewCusgitomer(customer))

    }

    return (
        <div className="container">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        {
                            loading ? (<Loader/>)
                                : error ? (<Message text={error} variant={"danger"}/>)
                                    : (
                                        <div className="col-lg-10">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4"><FontAwesomeIcon
                                                        icon={faUserPlus}></FontAwesomeIcon> Nouveau Client</h1>
                                                </div>
                                                <form>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Nom et Prénom: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   onChange={(event) => setName(event.target.value)}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>CIN: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   onChange={(event => setCin(event.target.value))}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Adresse: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   onChange={(event => setAddress(event.target.value))}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Numéro de téléphone: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   onChange={(event => setPhoneNumber(event.target.value))}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Date de Naissance: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="date" className="form-control"
                                                                   onChange={(event => setBirthDate(event.target.value))}/>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary btn-user btn-block"
                                                            onClick={handleSubmit}>
                                                        <FontAwesomeIcon icon={faSave}/> Sauvegarder
                                                    </button>

                                                </form>
                                            </div>
                                        </div>
                                    )
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}
