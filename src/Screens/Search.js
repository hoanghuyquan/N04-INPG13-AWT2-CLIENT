import React, { Component } from 'react';
import Header from '../Components/Header';
import ThumbSwiper from '../Components/ThumbSwiper';
import NavBar from '../Components/NavBar';
import { Icon } from 'antd';
import { Link } from "react-router-dom";
import Configs from '../Configs';
import '../Styles/home.css';
const axios = require('axios');


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            text: '',
        };
    }

    onChange = (input) => {
        this.setState({ text: input.target.value });
        setTimeout(() => {
            axios.post(Configs.hostServer + 'search', {
                search: this.state.text
            }).then((response) => {
                this.setState({ data: response.data.data });
                console.log('response', response);
            }).catch((error) => {
                console.log(error);
            });
        }, 1500);
    }

    renderItem = (item, index) => {
        return (
            <div key={index} className="news">
                <Link
                    to={{
                        pathname: '/sujet',
                        state: {
                            item: item,
                            level: item.level
                        }
                    }}
                    className="topic">
                    {item.topic}
                </Link>
                <div className="row">
                    <Icon className="content-padding-right" type="star" theme="outlined" />
                    <p className="content-padding-right">Niveau = </p>
                    <p className="content-padding-right">{item.level}</p>
                    <Icon className="content-padding-right" type="sound" theme="outlined" />
                    <p className="content-padding-right">{item.audio}</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
                    <ThumbSwiper />
                    <NavBar />
                    <div
                        style={{ marginTop: 20, width: '100%', justifyContent: 'flex-end' }}
                        className='row'>
                        <input
                            style={{ height: 20, width: 350 }}
                            type="input"
                            value={this.state.text}
                            onChange={(text) => this.onChange(text)} />
                        <Icon style={{ marginLeft: 10, marginRight: 5 }} type="search" />
                    </div>
                    <div style={{ width: '60%' }}>
                        {
                            this.state.data ?
                                this.state.data.map((item, index) => {
                                    return (
                                        this.renderItem(item, index)
                                    );
                                })
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
