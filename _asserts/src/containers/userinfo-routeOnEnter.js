import React, { Component, PropTypes } from 'react';
import {connect} 	from 'react-redux';
import { Link } 	from 'react-router';

class UserInfoRouteOnEnter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	localUserInfo: []
        };
    }

    renderUserList() {
    	return this.props.users.map((eachUser) => {
    		return (
    			<li className="list-group-item" key={eachUser.id} >
    				{eachUser.name}
    			</li>
			);
    	})
    }

    render() {
    	const allUsers = this.props.users;
    	if (!allUsers || allUsers.length <= 0) {
    		return (
    			<div className="page-header">
    			  	The data would be load when click link button in index page or enter url in browser.
    			 	<br />
    			  	But when you refresh page, data will gone.
					<p className="text-primary">
						Benefit of it is, the data will be loaded only when click link or onEnter.
						Disadvantage is: when user input url, the data would not be load.
	            	</p>
	            	<Link className="btn btn-warning" to="/">
	            		Back_Home
	            	</Link>
    			</div>
    		);
    	}
        return (
            <div>
            	<p className="text-primary">
					Benefit of it is, the data will be loaded only when click link or onEnter.
					Disadvantage is: when user input url, the data would not be load.
            	</p>
            	<ul className="list-group">
            		{this.renderUserList()}
            	</ul>
            	<Link className="btn btn-warning" to="/">
            		Back_Home
            	</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {users: state.users};
}

export default connect(mapStateToProps)(UserInfoRouteOnEnter);