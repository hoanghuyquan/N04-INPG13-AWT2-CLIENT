import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import '../App.css';

class Report extends Component {

    render() {

        return (
            <div style={{ backgroundColor: '#ffffff', marginTop: 20 }}>
                <Line
                    height={50}
                    data={{
                        labels: this.props.data.map((item, index) => {
                            return index;
                        }),

                        datasets:
                            [
                                {
                                    lineTension: 0,

                                    label: 'Votre point',
                                    backgroundColor: 'transparent',

                                    borderColor: '#EC2F5E',
                                    borderWidth: 2,

                                    pointBackgroundColor: '#5A1724',
                                    pointBorderWidth: 1,
                                    pointBorderColor: '#41042C',

                                    pointHoverBackgroundColor: '#000000',
                                    hoverBorderWidth: 5,
                                    data: this.props.data.map((item, index) => {
                                        return Math.round(item.point * 1000) / 100;
                                    }),
                                }
                            ]

                    }} />
            </div>
        );
    }
}

export default Report;
