import React, { Component } from 'react';

class IdxApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    idx-level
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default IdxApp;