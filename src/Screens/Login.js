import React, { Component } from 'react';

class Login extends Component {
    state = {
        phone: '',
        password: '',
        login: '#D8202A'
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
        else alert('Login success!');
    }



    render() {
        return (
            <div style={{ height: 1000 }} className="test">
                <div>
                    <p>Phone number</p>
                    <input
                        type="number"
                        value={this.state.phone}
                        onChange={(text) => this.changePhone(text)} />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={(text) => this.changePassword(text)} />
                </div>
                <div>
                    <button style={{ backgroundColor: this.state.login, marginTop: 20, height: 30, width: 100 }} type="button" onClick={this.submit}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;
