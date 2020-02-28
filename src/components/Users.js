import React, { Component } from 'react'
import EditUserModal from "./EditUserModal"
import { Col, Container, Row, ListGroupItem, ListGroup } from 'react-bootstrap'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: "",
            id: ""
        }
    }

    handleDelete = (id) => {
        this.props.delete(id)
    }

    // toggleModal = (user) => {
    //     this.props.toggle()
    //     this.setState({user: user})
    // }

    toggleEdit = (user, id) => {
        this.props.toggleEdit()
        this.setState({user: user, id: id})
    }

  render() {
    return (      
      <Container>
            <ListGroup>
              {this.props.users.map((user, index) =>{
                return (
                  <ListGroupItem key={index}>
                    <Row>
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
                      <button onClick={() => this.handleDelete(user.id)}>Delete Profile</button>
                      <button onClick={() => this.toggleEdit(user, user.id)}>Edit Profile</button>
                      </Col>
                    </Row>
                  </ListGroupItem>)
              })}
            </ListGroup>
            <EditUserModal user={this.state.user} id={this.state.id} edit={this.props.edit} isEdit={this.props.isEdit} toggle={this.props.toggleEdit}/>
      </Container>
    );
  }
}

export default Users