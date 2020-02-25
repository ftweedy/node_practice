import React, {Component} from 'react'
import {
  Col, Container, Row, FormControl, Form
} from 'react-bootstrap'

class NewUser extends Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          email: ''
        }
      }
    }

    handleChange = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    handleCreate = () => {
        this.props.createUser(this.state.form)
    }

    render = () => {
        return (
            <Container>
            <Row>
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
                    <button onClick={this.handleCreate}>Create User Profile</button>
                    </Form>
                </Col>
            </Row>
            </Container>
        )
    }
}
export default NewUser;