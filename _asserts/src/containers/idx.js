import React, { Component } from 'react';
import ReceiveBookList from './receive-bookslist';
import { Link } from 'react-router';
import DisplayThunkData from './display-thunk-data';

class Idx extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
        		idx page...
                <Link className="btn btn-lg btn-primary" to="else">
                    Else
                </Link>
                <Link className="btn btn-lg btn-info" to="userslist">
                    UsersList
                </Link>
                <Link className="btn btn-lg btn-danger" to="rr-Modal">
                    React-Redux-Modal-Sample
                </Link>
                <Link className="btn btn-lg btn-warning" to="animation">
                    animation css-transition-group
                </Link>
                <ReceiveBookList />
                <DisplayThunkData />
        	</div>
        );
    }
}

export default Idx;
