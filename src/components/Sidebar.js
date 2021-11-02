import * as React from 'react';
import { Link } from 'react-router-dom'
import {Dropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChartArea,
    faPlus, faTabletAlt,
    faUsers
} from '@fortawesome/free-solid-svg-icons'

export function Sidebar() {
    return (
        <>
            <ul
                className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <FontAwesomeIcon icon={faTabletAlt}/>
                    </div>
                    <div className="sidebar-brand-text mx-3">Digital Banking </div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/admin/">
                        <FontAwesomeIcon icon={faChartArea}/>
                        {" "}<span>Tableau de board</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Gestion des clients</div>

                <Dropdown className="nav-item">
                    <Dropdown.Toggle  className="nav-link myDrop">
                        <FontAwesomeIcon icon={faUsers} />
                        {" "}Clients
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to={"/admin/customers"}>
                            <Dropdown.Item >
                                <FontAwesomeIcon icon={faUsers} />
                                {" "}<span>Clients</span>
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={"/admin/nouveau-client"}>
                            <Dropdown.Item>
                                    <FontAwesomeIcon icon={faPlus} />
                                {" "}<span>Nouveau Client</span>
                            </Dropdown.Item>
                        </LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Gestion des comptes</div>
                <Dropdown className="nav-item">
                    <Dropdown.Toggle  className="nav-link myDrop">
                        <FontAwesomeIcon icon={faUsers} />
                        {" "}Comptes
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to={"/admin/clients"}>
                            <Dropdown.Item >
                                <FontAwesomeIcon icon={faUsers} />
                                {" "}<span>Comptes</span>
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={"/admin/nouvea-compte"}>
                            <Dropdown.Item>
                                <FontAwesomeIcon icon={faPlus} />
                                {" "}<span>Nouveau Compte</span>
                            </Dropdown.Item>
                        </LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        </>
    );
};