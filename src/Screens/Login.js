import React, { Component } from 'react';
import Header from '../Components/Header';
import ThumbSwiper from '../Components/ThumbSwiper';
import { Link } from "react-router-dom";
class Login extends Component {
    state = {
        phone: '',
        password: '',
        login: '#D8202A',
        log: true,
    }

    changePhone = (input) => {
        this.setState({ phone: input.target.value }, () => this.changeColorButtonLogin());
    }

    changePassword = (input) => {
        this.setState({ password: input.target.value }, () => this.changeColorButtonLogin());
    }

    changeColorButtonLogin = () => {
        if (this.state.phone.length === 0 && this.state.password.length === 0) {
            this.setState({ login: '#D8202A' });
        } else {
            if (this.state.phone.length >= 10 && this.state.password.length >= 6 && !this.state.password.match(/[^a-zA-Z0-9]+/g)) {
                this.setState({ login: '#D8202A' });
            } else this.setState({ login: 'green' });
        }
    }

    submit = () => {
        //check undefine and length phone number
        if (this.state.phone === '' || this.state.password === '' || this.state.phone.length < 10) {
            alert("You have not yet typed phone and password.");
        }
        //check length password
        else if (this.state.password.length < 6) {
            alert("You have not yet typed password.");
        }
        // check special characters in password
        else if (this.state.password.match(/[^a-zA-Z0-9]+/g)) {
            alert('Wrong format password.');
        }
        else {
            if (this.state.phone === '0987654321' && this.state.password === 'admin123') {
                this.setState({ log: true });
            } else alert('Wrong password.');
        }
    }


    render() {
        return (
            <div>
                <Header login />
                <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
                    <ThumbSwiper />
                    <div style={{ height: 350 }}>
                        <div style={{}} className="test">
                            <div>
                                <h3>Phone number</h3>
                                <input
                                    style={{ height: 30, width: 300 }}
                                    type="number"
                                    value={this.state.phone}
                                    onChange={(text) => this.changePhone(text)} />
                            </div>
                            <div>
                                <h3>Password</h3>
                                <input
                                    style={{ height: 30, width: 300 }}
                                    type="password"
                                    value={this.state.password}
                                    onChange={(text) => this.changePassword(text)} />
                            </div>
                            <div>
                                <Link to={this.state.log && "/home"}>
                                    <button style={{ backgroundColor: this.state.login, marginTop: 20, height: 40, width: 100, fontSize: 15, color: '#ffffff' }} type="button" onClick={this.submit}>Login</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
