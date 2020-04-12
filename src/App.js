import React from 'react';
import './App.css';
import Register from './components/Register';
import ChatList from './components/ChatList';
import CreateMessage from './components/CreateMessage';
import {connect} from 'react-redux';
import {fetchUsers, setSelected} from './redux/actions/users.action';
import {fetchMessages} from './redux/actions/messages.action';

function App(props) {
  const placeUserInState = (user, rightOrLeft) => {
  debugger;
   props.setSelected(user.id, rightOrLeft);
   props.fetchUsers();
  }
  
const messageCreated = () => {
    //enter only when there is new message
    props.fetchMessages();
}

  return (
  <div className="App">
    <div className="container">
      <h1>Redux stupid chat</h1>
      <div className="row">
        {/*Left side*/}
        <div className="col">
          <div className="col-15"> 
            <Register cb={(user) => placeUserInState(user, 'Left')} />
          </div>
          <div className="col-15"> 
            <ChatList messages={props.messages} user={props.selectedRight && props.selectedRight}/>
          </div>
          <div className="col-15">
            <CreateMessage userId={props.selectedLeft && props.selectedLeft.id} cb={messageCreated}/>
          </div>
        </div>
        {/*Right side*/}
        <div className="col">
          <div className="col-15">
            <Register cb={(user) => placeUserInState(user, 'Right')} />
          </div>   
          <div className="col-15">        
            <ChatList messages={props.messages} user={props.selectedLeft && props.selectedLeft}/>
          </div>
          <div className="col-15">
            <CreateMessage userId={props.selectedRight && props.selectedRight.id} cb={messageCreated}/>
          </div>
      </div>
      </div>
    </div>
  </div>
  );
}

export default connect (
  //what we need from the state
  (state) => ({
    selectedRight : state.users.users[state.users.selectedRight],
    selectedLeft: state.users.users[state.users.selectedLeft],
    messages : state.messages.messages
  }),
  //which actions we need for App.js
  {
    fetchUsers, setSelected, fetchMessages
  }
)(App);