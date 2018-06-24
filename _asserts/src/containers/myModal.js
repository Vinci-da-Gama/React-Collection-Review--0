import React, { Component } from 'react';
import ModalInnerContent from './modal-inner-context';
import { modal } from 'react-redux-modal';

class RRmodal extends Component {
    constructor(props) {
        super(props);
    }

    addModal() {
        modal.add(ModalInnerContent, {
            title: 'Modal content from ./modal-inner-context.js',
            // large, medium or small
            size: 'large',
            // (optional) Switch to true if you want to close the modal by clicking outside of it
            closeOnOutsideClick: true,
            // (optional) Switch to true if do not want the default title bar and close button,
            hideTitleBar: false,
            // (optional) if you don't wanna show the top right close button
            //.. all what you put in here you will get access in the modal props ;)
            hideCloseButton: false
        });
    }

    render() {
        return (
        	<div className="container">
	        	<button className="btn btn-lg btn-primary" onClick={this.addModal.bind(this)}>Add modal</button>
        	</div>
        );
    }
}

export default RRmodal;
