import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from "react-router-dom";
import '../Styles/news.css';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            level: '',
            difi: ''
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="news">
                <Link
                    to={{
                        pathname: '/sujet',
                        state: {
                            item: this.props.item,
                            level: this.props.item.level
                        }
                    }}
                    className="topic">
                    {this.props.item.topic}
                </Link>
                <div className="row">
                    <Icon className="content-padding-right" type="star" theme="outlined" />
                    <p className="content-padding-right">Niveau = </p>
                    <p className="content-padding-right">{this.props.item.level}</p>
                    <Icon className="content-padding-right" type="sound" theme="outlined" />
                    <p className="content-padding-right">{this.props.item.time}:00</p>
                </div>
            </div>
        );
    }
}

export default News;