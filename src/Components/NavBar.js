import React, { Component } from 'react';
import '../Styles/navBar.css';
import { Icon } from 'antd';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <ul>
                <li><Link className={"link"} to="/home">Accueil</Link></li>
                <li className={"link"} >Youtube</li>
                <li className={"link"} >Test De Niveau</li>
                <li className={"link"} >Groupes</li>
                <li className={"link"} >Nombres</li>
                <li className={"link"} >Mon Compte</li>
                <li className={"link"} >Archiver</li>
                <li><Link className={"link"} to="/nouvelle">Nouvelle</Link></li>
                <li><Link className={"link"} to="/chercher">
                    <Icon type="search" />
                </Link></li>
            </ul>
        );
    }
}

export default NavBar;

