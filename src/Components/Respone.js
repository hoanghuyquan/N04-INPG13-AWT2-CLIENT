import React, { Component } from 'react';
import '../Styles/levels.css';

class Response extends Component {

    render() {
        return (
            <div className="content">
                <h5> {this.props.qus ? "Question" : "Votre réponse"}</h5>
                {this.props.data.map((item, index) => {
                    return (
                        this.props.qus ?
                            <p key={index}>{index} - {item.question}</p>
                            :
                            <p key={index}>{index} - {item.answer}</p>

                    );
                })}
            </div>
        );
    }
}

export default Response;