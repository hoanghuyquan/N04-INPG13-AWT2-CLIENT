import React, { Component } from 'react';
import News from '../Components/News';
import Levels from '../Components/Levels';
import Configs from '../Configs';
import '../Styles/home.css';
const axios = require('axios');

class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            level: -1
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const response = await axios.get(Configs.hostServer + `get-topic?level=${this.props.location.state.item.level}`);
            console.log(response);
            this.setState({ data: response.data.data, level: response.data.data[0].level });
        } catch (error) {
            console.error(error);
        }
    }

    refresh = () => {
        window.location.reload();
    }

    render() {
        return (
            <div className="home">
                <div style={{ width: '60%' }}>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <News key={index} index={index} item={item} />
                            );
                        })
                    }
                </div>
                <div style={{ width: '40%', marginLeft: 100 }}>
                    <Levels data={this.props.location.state.data} lv={this.state.level} refresh={this.refresh} />
                </div>
            </div>
        );
    }
}

export default Level;
