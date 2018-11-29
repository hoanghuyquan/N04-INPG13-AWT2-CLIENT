import React, { Component } from 'react';
import { Icon } from 'antd';
import Configs from '../Configs';
import '../Styles/audio.css';

class Audio extends Component {
    state = {
        answer: '',
    }

    handleChange = (event) => {
        this.setState({ answer: event.target.value });
        this.props.typing(this.props.index, event.target.value);
    }

    render() {
        const item = this.props.item;
        return (
            this.props.select === this.props.index ?
                <div style={{ marginTop: 20 }}>
                    <div className="row">
                        <Icon type="bulb" theme="outlined" />
                        <p style={{ marginLeft: 10 }}>{this.props.index + 1}/{this.props.length}</p>
                        <Icon style={{ marginLeft: 20 }} type="star" theme="outlined" />
                        <p style={{ marginLeft: 10 }}>Niveau:</p>
                        <p style={{ marginLeft: 5, marginRight: 20 }}>{item.level}</p>

                        <audio style={{ marginLeft: "5%" }} controls loop>
                            <source src={Configs.hostAudio + item.level + '/' + item.topic + '/' + item.audio} />
                        </audio>
                    </div>
                    <textarea
                        className="text-input"
                        type="text"
                        value={this.state.answer}
                        onChange={this.handleChange} />

                    <div style={{ justifyContent: 'flex-end', width: 515 }} className="row">
                        {this.props.select === 0 ? null :
                            <button style={{
                                marginLeft: 10,
                                marginTop: 10,
                                height: 40,
                                width: 100,
                                padding: 10,
                                justifyContent:
                                    'center',
                                alignItems:
                                    'center'
                            }}
                                type="button"
                                onClick={() => this.props.previous()}>
                                Précédent
                    </button>}
                        <button style={{
                            marginLeft: 10,
                            marginTop: 10,
                            height: 40,
                            width: 100,
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: this.props.select === this.props.length - 1 ? "#4F5283" : null
                        }}
                            className="row"
                            type="button"
                            onClick={() => this.props.select === this.props.length - 1 ? this.props.commit() : this.props.next()}>
                            {this.props.select === this.props.length - 1 ? "Terminé" : "Suivant"}
                        </button>
                    </div>

                </div > : null
        )
    }
}

export default Audio;