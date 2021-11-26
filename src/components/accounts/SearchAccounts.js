import Message from "../shared/Message";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSave, faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";

export function SearchAccounts() {
    // history
    const history = useHistory()

    // search accounts
    const handleSearch = (e) => {
        e.preventDefault()
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
                                            <input className={"form-control"} type={"text"} placeholder={"CIN.."}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label>Par Numéro de compte: </label>
                                        </div>
                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                            <input className={"form-control"} type={"text"}
                                                   placeholder={"Numero de compte.."}/>
                                        </div>
                                    </div>


                                    <button className="btn btn-primary btn-user btn-block"
                                            onClick={handleSearch}>
                                        <FontAwesomeIcon icon={faSearch}/> Rechercher
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