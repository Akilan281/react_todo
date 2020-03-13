 import React from 'react'
import './App.css';
class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      userList: []
    }
  }

  componentDidMount() {
    let usersList = JSON.parse(localStorage.getItem('userList'))
    if (usersList && usersList.length)
      this.setState({ userList: usersList })
  }
  handleDel=()=>{
    localStorage.removeItem('userlist')
  }

  render() {
    return (
      <div className="userinfo">
        <table>
          <tr>
            <th>Username</th>
            <th>Mobilenumber</th>
            <th>Modify</th>
          </tr>
          {
            this.state.userList.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td><button onclick={this.handleDel}>Delete</button><button>Edit</button></td>
                </tr>
              )
            })
          }
        </table>
      </div>

    )
  }
}

export default Home;