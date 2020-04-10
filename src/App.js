import React from 'react';
import './App.css';
import Register from './components/Register';
import ChatList from './components/ChatList';
import CreateMessage from './components/CreateMessage';

function App() {
  return (
  <div className="App">
    <div className="container">
      <h1>Redux stupid chat</h1>
      <div className="row">
        <div className="col-6">
          <Register/>
        </div>
        <div className="col-6">
          <Register/>
        </div>          
        <ChatList/>
        <ChatList/>
        <div className="col-6">
          <CreateMessage/>
        </div>
        <div className="col-6">
          <CreateMessage/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
