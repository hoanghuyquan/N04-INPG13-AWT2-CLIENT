import React, { Component } from 'react';
import Audio from '../Components/Audio';
import Configs from '../Configs';
import Respone from '../Components/Respone';
import Header from '../Components/Header';
import ThumbSwiper from '../Components/ThumbSwiper';
import NavBar from '../Components/NavBar';
import Report from './Report';
import '../Styles/topic.css';
const axios = require('axios');


class Topic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataStatistic: [],
            answer: [
                { answer: '' },
                { answer: '' },
                { answer: '' },
                { answer: '' },
                { answer: '' },
            ],
            topic: '',
            select: 0,
            respone: false
        };
    }

    componentDidMount() {
        this.getData();
        this.getStatistic();
    }

    getData = async () => {
        try {
            const response = await axios.get(Configs.hostServer + `get-data?topic_id=${this.props.location.state.item.topic_id}`);
            console.log(response);
            this.setState({ data: response.data.data, topic: response.data.data[0].topic });
        } catch (error) {
            console.error(error);
        }
    }

    getStatistic = async () => {
        try {
            const response = await axios.get(Configs.hostServer + `get-statistic?level=${this.props.location.state.level}`);
            console.log(response);
            this.setState({ dataStatistic: response.data.data });
        } catch (error) {
            console.error(error);
        }
    }

    typing = (index, answer) => {
        if (!this.state.respone) {
            const newAnswer = [...this.state.answer];
            const newItem = { ...this.state.answer[index], answer: answer };
            newAnswer[index] = newItem;
            this.setState({ answer: newAnswer });
        }
    }

    commit = () => {
        if (this.state.respone) {
            alert("Vous avez envoyé la réponse");
        } else {
            if (window.confirm('Confirmer la soumission ?')) {
                this.setState({ respone: true });
                axios.post(Configs.hostServer + 'submit', {
                    answer: this.state.answer,
                    question: this.state.data
                }).then((response) => {
                    this.getStatistic();
                }).catch((error) => {
                    alert(error);
                });
            }
        }
    }

    next = () => {
        if (this.state.select < this.state.data.length - 1) {
            this.setState({ select: this.state.select + 1 });
        }
    }

    previous = () => {
        if (this.state.select > 0) {
            this.setState({ select: this.state.select - 1 });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
                    <ThumbSwiper />
                    <NavBar />
                    <div className="home">
                        <div style={{ width: '60%' }}>
                            <h3 className="audio-padding-right">{this.state.topic}</h3>
                            {
                                this.state.data.map((item, index) => {
                                    return (
                                        <Audio
                                            key={index}
                                            index={index}
                                            item={item}
                                            length={this.state.data.length}
                                            select={this.state.select}
                                            next={this.next}
                                            previous={this.previous}
                                            typing={this.typing}
                                            commit={this.commit} />
                                    );
                                })
                            }

                        </div>
                        <div style={{ width: '40%', marginLeft: 100 }}>
                            {this.state.respone ?
                                <div className="home">
                                    <Respone data={this.state.data} qus />
                                    <Respone data={this.state.answer} />
                                </div> : null}
                        </div>
                    </div>
                    <div>
                        <Report data={this.state.dataStatistic} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Topic;
