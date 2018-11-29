import React, { Component } from 'react';
import News from '../Components/News';
import Levels from '../Components/Levels';
import Configs from '../Configs';
import '../Styles/home.css';
const axios = require('axios');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const response = await axios.get(Configs.hostServer + 'get-topic');
            console.log(response);
            this.setState({ data: response.data.data });
        } catch (error) {
            console.error(error);
        }
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
                    <Levels data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Home;
