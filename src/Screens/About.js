import React, { Component } from 'react';
import '../App.css';

class About extends Component {

    render() {
        return (
            <div>
                <h3 style={{ paddingLeft: 10 }}>Groupe N04</h3>
                <div style={{ paddingLeft: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h4>+ Chef: </h4>
                        <p style={{ paddingLeft: 10 }}>Hoàng Huy Quân - 20148475 - INPG13</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h4>+ Membres: </h4>
                        <p style={{ paddingLeft: 10 }}>Nguyễn Đức Mạnh - 20158104 - INPG14</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h4>+ Membres: </h4>
                        <p style={{ paddingLeft: 10 }}>Nguyễn Văn Duy - 20148326 - INPG13</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
