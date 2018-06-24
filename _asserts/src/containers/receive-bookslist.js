import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return(
		{ propBl: state.booksCollection }
	);
}

class ReceiveBookList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
    	return this.props.propBl.map((eachBook) => {
			return (
				<li className="list-group-item" key={eachBook.title}>
					<span className="label label-info pull-right">
						Book_Author: {eachBook.author}
					</span>
					<cite>
						page: {eachBook.page}
					</cite>
				</li>
			);
		})
    }

    render() {
        return (
            <div className="well">
            	<ul className="list-group">
            		{this.renderList()}
            	</ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(ReceiveBookList);