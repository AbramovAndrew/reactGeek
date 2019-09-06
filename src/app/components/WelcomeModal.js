import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.show
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({modal: false});
    }

    render() {
        return (
            <Modal show={this.state.modal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    componentDidMount() {

    }
}

export default WelcomeModal;