import React, { Component } from 'react'
import EditUserModal from "./EditUserModal"
import {
  Col, Container, Row, ListGroupItem, ListGroup
} from 'react-bootstrap'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }

    handleDelete = (id) => {
        this.props.delete(id)
    }

    toggleModal = (user) => {
        this.props.toggle()
        this.setState({user: user})
    }
    toggleEdit = (user, id) => {
        this.props.toggleEdit()
        this.setState({user: user, id: id})
    }

  render() {
    console.log(this.props.users)
    return (
	<Container>
        <ListGroup>
          {this.props.users.map((user, index) =>{
            return (
              <ListGroupItem key={index}>
                <Row>
                <h4>
                  <Col>
                    <span className='user-name'>
                      Name: {user.name}
                    </span>
                  </Col>
                  <Col>
                    <span className='user-email'>
                      Email: {user.email}
                    </span>
                  </Col>
                  <Col>
                  <button onClick={() => this.handleDelete(user.id)}>Delete Cat Profile</button>
                  </Col>
                </h4>
                </Row>
              </ListGroupItem>)
          })}
        </ListGroup>
	</Container>
    );
  }
}

export default Users