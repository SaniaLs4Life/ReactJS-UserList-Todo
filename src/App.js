import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()
    this.onRemoveUser = this.onRemoveUser.bind(this)
    this.onChangeUser = this.onChangeUser.bind(this)
    this.addNewUser = this.addNewUser.bind(this)

    this.state = {
      user: [],
      userInput: ''
    }
  }


  onRemoveUser(id) {
    let users = this.state.user.slice()
    users.splice(id, 1)
    this.setState({
      user: users
    })

  }
  onChangeUser(item) {
    this.setState({
      userInput: item
    })
  }
  addNewUser(item) {
    if (item.length > 0) {
      let newUser = this.state.user
      newUser.push(item)
      this.setState({
        user: newUser,
        userInput: ''
      })
    } else {
      return
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
          </div>
          <div className="col-6">
            <h1>User Form</h1>
            <ul className="list-group">
              <input type="text" onChange={(e) => this.onChangeUser(e.target.value)} value={this.state.userInput} className="form-group" placeholder="Add new user" />
              <button className="btn btn-warning" onClick={() => this.addNewUser(this.state.userInput)}>Add</button>
            </ul>
            {
              !this.state.user.length > 0 ?

                <div className="alert alert-warning" role="alert">
                  There is no user
                 </div>
                :
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col" className="name">Fullname</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {

                      this.state.user.map((user, i) => {
                        return (

                          <tr  key={i}>
                            <th scope="row">User</th>
                            <td className="name">{user}</td>
                            <td><span onClick={this.onRemoveUser.bind(this, i)} className="remove">x</span></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            }
          </div>


        </div>
        <div className="col-3">
        </div>
      </div>
    );
  }
}

export default App;
