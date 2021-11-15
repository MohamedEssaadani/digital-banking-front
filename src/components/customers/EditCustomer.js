import {faEdit, faSave, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCustomerById, UpdateCustomer} from "../../actions/CustomersActions";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import {Button} from "react-bootstrap";
import {useParams} from "react-router-dom";

export function EditCustomer() {
    // get dispatch
    const dispatch = useDispatch()

    // history to navigate
    const history = useHistory()

    // useSelector to get customer detail
    let {loading, customer, error} = useSelector(state => state.customer)

    const [customerInfo, setCustomerInfo] = useState({})


    // get customer id from url using useParams() hook
    let {id} = useParams();

    // success & error messages
    let [successMessage, setSuccessMessage] = useState('')
    let [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        // dispatch action getCustomerById()
        dispatch(getCustomerById(id))
    }, [dispatch, id])

    // handle attributes changes
    const handleInputChange = (e) => {
        const {name, value} = e.target
        customer[name] = value
        setCustomerInfo({...customer})
    }

    // update customer
    const handleUpdate = (e) => {
        e.preventDefault()

        // if user didn't fill the inputs
        if (customer.name === '' || customer.phoneNumber === '' || customer.cin === '' || customer.birthDate === '' || customer.address === '') {
            // show error message
            setErrorMessage("Merci de remplir toutes les champs s'il vous plait!")
            setSuccessMessage("")

            // if user filled the inputs
        } else {
            dispatch(UpdateCustomer(id, customerInfo))
            // show success message
            setSuccessMessage("Le client modifié avec succès")
            setErrorMessage("")
        }

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
                                                <Button className={"btn btn-dark"}
                                                        onClick={() => history.goBack()}>Back</Button>
                                                {successMessage && (<Message text={successMessage}
                                                                             variant={"success"}/>)}
                                                {errorMessage && (<Message text={errorMessage}
                                                                           variant={"danger"}/>)}
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4"><FontAwesomeIcon
                                                        icon={faEdit}/> Modifier client</h1>
                                                </div>
                                                <form>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Nom et Prénom: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   value={customer.name}
                                                                   name={"name"}
                                                                   onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>CIN: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   value={customer.cin}
                                                                   name={"cin"}
                                                                   onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Adresse: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   value={customer.address}
                                                                   name={"address"}
                                                                   onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Numéro de téléphone: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   value={customer.phoneNumber}
                                                                   name={"phoneNumber"}
                                                                   onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Date de Naissance: </label>
                                                        </div>
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="date"
                                                                   className="form-control"
                                                                   defaultValue={customer.birthDate}
                                                                   name={"birthDate"}
                                                                   onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary btn-user btn-block"
                                                            onClick={handleUpdate}
                                                    ><FontAwesomeIcon icon={faSave}/> Sauvegarder
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
