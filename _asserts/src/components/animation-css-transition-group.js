import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AddonsCssAnimationTransitionGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
  			stateThings: ['hello', 'world', 'click', 'me']
        };
        this.AddWithAnimation = this.AddWithAnimation.bind(this);
        // this.RemoveWithAnimation = this.RemoveWithAnimation.bind(this);
    }

    AddWithAnimation() {
    	// ary0.concat(ary1);
    	let addThing = this.state.stateThings.concat([
    		prompt("prompt -- input new text: ")
    	]);
    	this.setState({
    		stateThings: addThing
    	});
    }

    RemoveWithAnimation(i) {
    	let removeThing = this.state.stateThings.slice();
    	removeThing.splice(i, 1);
    	this.setState({
    		stateThings: removeThing
    	});
    }

    render() {
    	const cssTransitionItem = this.state.stateThings.map((eachItem, i) => (
    		<li key={i} className="list-group-item">
    			context: {eachItem} -- index is: {i}
				<span className="pull-right">
					<button type="button" className="btn btn-danger"
						onClick={() => {this.RemoveWithAnimation(i)}}>
						Remove_item
					</button>
				</span>
    		</li>
        ));
        const cssTransitionObj = {
        	transitionName: "fade",
			transitionEnterTimeout: 1000,
	        transitionLeaveTimeout: 1000
        };
        return (
            <div>
            	<div className="row">
            		<div className="col-xs-12 col-sm-6">
            			<button type="button" className="btn btn-success btn-lg"
            				onClick={this.AddWithAnimation}>
            				Add_item_with_animation
            			</button>
            		</div>
            		<div className="col-xs-12 col-sm-6">
						<Link to="/" className="btn btn-info btn-lg" type="button">
							Back_Home
						</Link>
            		</div>
            	</div>
        		<ul className="list-group">
	        		<ReactCSSTransitionGroup {...cssTransitionObj}>
				        {cssTransitionItem}
	        		</ReactCSSTransitionGroup>
        		</ul>
            </div>
        );
    }
}

export default AddonsCssAnimationTransitionGroup;
