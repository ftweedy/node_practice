import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header"
import Users from "./components/Users"
import NewUser from "./components/NewUser"

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      apiResponse: "",
      users: {},
      isOpen: false,
      isEdit: false ,
      promiseIsResolved: false
    }
  }

  toggleModal = () =>{
    let state = (this.state.isOpen ? false : true)
    this.setState({
      isOpen: state
    })
  }

  toggleEdit = () =>{
    let state = (this.state.isEdit ? false : true)
    this.setState({
      isEdit: state
    })
  }

  componentDidMount = async () => {
    return await fetch('http://localhost:9000/testAPI/users')
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({ 
          users: data, 
          promiseIsResolved: true 
        } )
      })
  }

  createUser = async (person) => {
    return await fetch('http://localhost:9000/testAPI/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(person),
      })
      .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({
            users: data
          })
        })
  }

  editUser = (user, id) => {
    fetch(`http://localhost:9000/testAPI/users/${id}`, {
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
      method: "PUT"
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ users: json})
      })
  }

  destroyUser = async (id) => {
    await fetch(`http://localhost:9000/testAPI/users/${id}`, {
      method: "DELETE", 
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        return resp.json()
      })
      .then(json => {
        this.setState({ 
          users: json
        })
      })
  }

  render = () => {
    if(!this.state.promiseIsResolved){return null}
    return (
      <div className="App">
        <Header />
        <br />
        {<Users users={this.state.users} delete={this.destroyUser}/>
        /*toggle={this.toggleModal} toggleEdit={this.toggleEdit} isOpen={this.state.isOpen} isEdit={this.state.isEdit} edit={this.edit}/> */}
        <br />
        <NewUser users={this.state.users} createUser={this.createUser}/>
      </div>
    )
  }
}

export default App;
