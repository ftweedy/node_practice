import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {
  Col, FormControl, Form
} from 'react-bootstrap'

class EditUserModal extends Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
            name: "",
            email: ""
        }
      }
    }

    handleChange = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    toggleModal = () => {
        this.props.toggle()
    }

    defaultState = () => {
        this.setState({form: this.props.user})
    }

    handleUpdate = () => {
        this.props.edit(this.state.form, this.props.id)
    }

    render() {
    return(
        <div>
        <Modal show={this.props.isEdit} onHide={this.toggleModal} onShow={this.defaultState}>
        <Col xs={12}>
            <Form>
            <Form.Row>
                <Col>
                <Form.Group condtrolID="formNameEntry">
                  <Form.Label id="name">Name</Form.Label>
                  <FormControl
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.form.name}
                  />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group condtrolID="formEmailEntry">
                  <Form.Label id="email">Email</Form.Label>
                  <FormControl
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.form.email}
                  />
                </Form.Group>
                </Col>
            </Form.Row>
            <button onClick={this.handleUpdate}>Edit Cat Profile</button>
            </Form>
        </Col>
        </Modal>
        </div>
        )
    }
}
export default EditUserModal;
