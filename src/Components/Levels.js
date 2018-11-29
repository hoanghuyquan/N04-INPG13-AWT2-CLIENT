import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Styles/levels.css';

class Levels extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="content">
                {this.props.data.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={{
                                pathname: '/niveau',
                                state: {
                                    item: item,
                                    data: this.props.data
                                }
                            }}
                        >
                            <button
                                style={this.props.lv === item.level ? { backgroundColor: '#1d104bcb' } : null}
                                key={index}
                                className="button"
                                type="button"
                                onClick={() => this.props.refresh ? this.props.refresh() : null}>{item.level}</button>
                        </Link>

                    )
                })}
            </div>
        );
    }
}

export default Levels;