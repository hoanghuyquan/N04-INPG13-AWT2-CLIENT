import React, { Component } from 'react';
import '../Styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h2>Bienvenue à Écouter et Écrire</h2>
                </div>
                {
                    this.props.login ? null :
                        <div className="user">
                            <h5>Hoang Huy Quan</h5>
                        </div>
                }
            </div>
        );
    }
}

export default Header;