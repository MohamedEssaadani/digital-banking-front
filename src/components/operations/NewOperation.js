import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSave, faUserPlus} from "@fortawesome/free-solid-svg-icons";

export function NewOperation() {
    // init variables
    const [operationType, setOperationtype] = useState('')
    const [amount, setAmount] = useState(0)
    const [account, setAccountId] = useState(0)

    // success & error messages
    let [successMessage, setSuccessMessage] = useState('')
    let [errorMessage, setErrorMessage] = useState('')

    // dispatch
    const dispatch = useDispatch()

    // history navigate
    const history = useHistory()


    // created account
    //const {loading, operation, error} = useSelector(state => state.createdOperation)

    return (
        <div className="container">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
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
                                        icon={faPlus}/> Nouvelle Operation</h1>
                                </div>
                                <form>

                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label>Compte : </label>
                                        </div>
                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                            <input type={"text"}/>
                                        </div>
                                        <div className={"col-sm-2 mb-3 mb-sm-0"}>
                                            <button className={"btn btn-success"}><FontAwesomeIcon
                                                icon={faUserPlus}/>
                                            </button>
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

                    </div>
                </div>
            </div>
        </div>

    )
}