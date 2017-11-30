import React, { Component } from 'react';
import Timer from './Timer/Timer';
import Header from './Header';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Timer'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />

                <div className="container mt-5">
                    <div className="d-flex flex-row">
                        <div className="col-md-4 mx-auto">
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}