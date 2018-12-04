import React, { Component } from 'react';
import Header from '../Components/Header';
import ThumbSwiper from '../Components/ThumbSwiper';
import NavBar from '../Components/NavBar';
// import Configs from '../Configs';
import '../Styles/home.css';
// const axios = require('axios');


class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            topic: '',
            level: '',
            question: '',
            file: null,
        };
    }

    componentDidMount() {
    }

    uploadFile = () => {
        if (this.state.topic !== '' && this.state.level !== '' && this.state.question !== '' && this.state.file !== null) {
            if (window.confirm('Télécharger ?')) {
                window.location.reload();
            }
        }
        else alert('École manquante');

    }

    pickFile = (file) => {
        this.setState({ file: file });
        // console.log('file', file);
    }
    changeTopic = (input) => {
        this.setState({ topic: input.target.value });
    }
    changeLevel = (input) => {
        this.setState({ level: input.target.value });
    }
    changeQuestion = (input) => {
        this.setState({ question: input.target.value });
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
                    <ThumbSwiper />
                    <NavBar />
                    <div>
                        <h3>Sujet</h3>
                        <input
                            style={{ height: 20, width: 400 }}
                            type="input"
                            value={this.state.topic}
                            onChange={(text) => this.changeTopic(text)} />
                        <h3>Niveau</h3>
                        <input
                            style={{ height: 20, width: 400 }}
                            type="input"
                            value={this.state.level}
                            onChange={(text) => this.changeLevel(text)} />
                        <h3>Question</h3>
                        <input
                            style={{ height: 20, width: 400 }}
                            type="input"
                            value={this.state.question}
                            onChange={(text) => this.changeQuestion(text)} />
                        <div>
                            <input
                                style={{ marginTop: 20 }}
                                type="file"
                                onChange={this.pickFile} />
                        </div>
                        <button style={{
                            marginLeft: 300,
                            marginTop: 10,
                            height: 40,
                            width: 100,
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: "#4F5283"
                        }}
                            type="button"
                            onClick={() => this.uploadFile()}>
                            Téléverser
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upload;
