import React, { Component } from 'react';

class ModalInnerContent extends Component {
    constructor(props) {
        super(props);
        // this.removeThisModal = this.removeThisModal.bind(this);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    render() {
        return (
        	<div>
            	<p className="modal-fontcolor">
                    This is modal-inner-context.
                    <br />
                    You should inject this Component into ./myModal.js
                </p>
        		<button type="button" className="btn btn-warning modal-btnfont" 
                    onClick={ this.removeThisModal.bind(this) }>
        			close this modal, you also can click outside to close it.
        		</button>
            </div>
        );
    }
}

export default ModalInnerContent;