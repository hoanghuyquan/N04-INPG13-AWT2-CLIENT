import React, { Component } from 'react';
import '../Styles/navBar.css';
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {
        home: true,
        about: false,
        current: 'mail',
    }

    _onClick = (page) => {
        if (page === "home") {
            this.setState({ home: true, level: false, report: false, about: false });
        }
        if (page === "about") {
            this.setState({ home: false, level: false, report: false, about: true });
        }
    }


    render() {
        return (
            <ul>
                <li><Link onClick={() => this._onClick("home")} className={"link"} to="/">Accueil</Link></li>
                <li className={"link"} >Youtube</li>
                <li className={"link"} >Test De Niveau</li>
                <li className={"link"} >Groupes</li>
                <li className={"link"} >Nombres</li>
                <li className={"link"} >Mon Compte</li>
                <li className={"link"} >Archiver</li>
                <li><Link onClick={() => this._onClick("about")} className={"link"} to="/about">Au Sujet</Link></li>


            </ul>
        );
    }
}

export default NavBar;

