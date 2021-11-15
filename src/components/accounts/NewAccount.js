import {faPlus, faSave, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewAccount} from "../../actions/AccountsActions";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import {Button} from "react-bootstrap";
import {getCustomersList} from "../../actions/CustomersActions";

export function NewAccount() {
    // init variables
    const [accountType, setAccountType] = useState('')
    const [balance, setBalance] = useState('')
    const [customerId, setCustomerId] = useState(0)

    // success & error messages
    let [successMessage, setSuccessMessage] = useState('')
    let [errorMessage, setErrorMessage] = useState('')

    // dispatch
    const dispatch = useDispatch()

    // history navigate
    const history = useHistory()

    // get customers list
    const {loading, error, customers} = useSelector(state => state.customersList)

    // created account
    const {account} = useSelector(state => state.createdAccount)

    useEffect(() => {
        dispatch(getCustomersList()).then(() => {
            console.log(customers)
        })
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()

        /*// if user didn't fill at least name & phone number
        if (name === '' && phoneNumber === '') {
            // show error message
            setErrorMessage("Merci de remplir les champs obligatoire (Nom, Téléphone) s'il vous plait!")
            setSuccessMessage("")

            // if user at least has filled name & phone number
        } else {
            const customer = {
                name,
                birthDate,
                cin,
                address,
                phoneNumber
            }
            dispatch(addNewCustomer(customer))
            // show success message
            setSuccessMessage("Le client enregistré avec succès")
            setErrorMessage("")
        }*/
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
                                                        icon={faPlus}/> Nouveau Compte</h1>
                                                </div>
                                                <form>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Client: </label>
                                                        </div>
                                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                                            <select className={"form-control"}>
                                                                {
                                                                    customers.map(cust => {
                                                                        return (
                                                                            <option value={cust.id}>{cust.name}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className={"col-sm-2 mb-3 mb-sm-0"}>
                                                            <button className={"btn btn-success"}><FontAwesomeIcon
                                                                icon={faUserPlus}/></button>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Type de compte: </label>
                                                        </div>
                                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                                            <select className={"form-control"}
                                                                    onChange={(event) => setAccountType(event.target.value)}>
                                                                <option value={"COURANT"}>COURANT</option>
                                                                <option value={"EPARGNE"}>EPARGNE</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <label>Solde: </label>
                                                        </div>
                                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control"
                                                                   onChange={(event => setBalance(event.target.value))}/>
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
