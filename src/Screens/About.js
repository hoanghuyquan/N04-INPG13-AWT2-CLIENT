import React, { Component } from 'react';
import '../App.css';

class About extends Component {

    render() {
        return (
            <div style={{ height: 450 }}>
                <h3>Groupe N04</h3>
                <div style={{ paddingLeft: 10}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3>+ CHEF: </h3>
                        <p style={{ paddingLeft: 10 }}>Hoàng Huy Quân - 20148475 - INPG13</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3>+ MEMBRES: </h3>
                        <p style={{ paddingLeft: 10 }}>Nguyễn Đức Mạnh - xxxxxxxx - INPG14</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3>+ MEMBRES: </h3>
                        <p style={{ paddingLeft: 10 }}>Nguyễn Văn Duy - xxxxxxxx - INPG13</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
