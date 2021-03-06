import React from 'react'
import {connect} from 'react-redux'
import {setUser} from '../actions/setUser.js'

class LogIn extends React.Component {

  state={
    email: "",
    password: ""
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let history = this.props.history
    let email= this.state.email
    let password= this.state.password
    this.props.boundSetUser(email, history)
    this.setState({
        email: "",
        password: ""
      })
  }

  render(){
    return(
      <div className="container">
      <h3>Log In</h3>
        <form onSubmit= {this.handleSubmit}>
          <label>Email: </label>
            <input type="text" name="email" value={this.state.email} onChange={this.changeHandler}/>
              <br/>
          <label>Password: </label>
            <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
              <br/>
          <input type="submit" value="Login" class="btn btn-light"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return(
    {boundSetUser: (user, history) => dispatch(setUser(user, history))}
  )
}

export default connect(null, mapDispatchToProps)(LogIn)
