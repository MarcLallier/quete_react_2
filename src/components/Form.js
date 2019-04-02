import React from 'react'

class Form extends React.Component{
  state = {
    firstName : "",
    shoulITry : "",
    whatDoINeed : "",
    email : "" 
  }
  
  typingChange = event =>{
    this.setState ({[event.target.name] : event.target.value})
  } 

  /*colorChange = event => {
    this.setState
  }*/

  render(){
    return (
      <div>
        
        My name is : {this.state.firstName}
        <p>
          <input name = "firstName" type="text" onChange = {this.typingChange}/>
        </p>
        Would I try to go : {this.state.shoulITry}
        <p>
          <input name = "shoulITry" type="text" onChange = {this.typingChange}/>
        </p>
        What would I need if I go : {this.state.whatDoINeed}
        <p>
          <input name = "whatDoINeed" type="text" onChange = {this.typingChange}/>
        </p>
        If you want to travel, put your email : {this.state.email}
        <p>
          <input name = "email" type="email" onChange = {this.typingChange}/>
        </p>
        
      </div>)
    }
}

export default Form