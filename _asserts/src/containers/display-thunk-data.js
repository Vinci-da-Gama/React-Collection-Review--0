import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetUsersThunk } from '../actions/index';

class DisplayThunkData extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    	console.log('11 -- componentWillMount');
        this.props.GetUsersThunk();
    }

	renderUsers() {
		const sampleStyle = {
			color: "red",
			fontSize: "20px"
		};
		console.log('16 -- this.props.propUsers is: ', this.props.propUsers);
		return this.props.propUsers.map((eachUser) => {
			return (
				<li className="list-group-item" key={eachUser.id}>
					<span className="pull-right" style={sampleStyle}>Email: {eachUser.email}</span>
					<span>
						name: {eachUser.name} -- username: {eachUser.username}
					</span>
				</li>
            );
		});	
	}

    render() {
		const pu = this.props.propUsers;
		/*const letterStyle = {
	        padding: 10,
	        margin: 10,
	        backgroundColor: "#ffde00",
	        color: "#333",
	        display: "inline-block",
	        fontFamily: "monospace",
	        fontSize: "32",
	        textAlign: "center"
	    };*/
		console.log('29 -- pu is: ', pu);
		if (!pu || pu.length <= 0) {
			return (
				<div>
					Loading...
				</div>
			);
		}	
        return (
        	<div className="row">
        		display thunk Data -- users list.
        		<ul className="list-group">
        			{this.renderUsers()}
        		</ul>
        	</div>
        );
    }
}

const mapStateToProps = (state) => {
	console.log('48 -- state: ', state);
	return { propUsers: state.users };
}

export default connect(mapStateToProps, {GetUsersThunk})(DisplayThunkData);