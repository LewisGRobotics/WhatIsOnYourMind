import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import GenericButton from './components/GenericButton';
import TextInput from './components/TextInput';
import ThoughtsPage from './components/ThoughtsPage';
import {useState , useEffect} from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import config from './config'

const App = () =>  {  
  // Initialize Firebase 
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  };  
  
  const [userTextInput, setUserTextInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect (()=> {
    var database = firebase.database().ref('/messages');
    database.on('value', (snapshot) => {
      const state = snapshot.val();
      setMessages(state);
    })
    
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const sendMessage = async () => {
    // Input validation: empty input, no space in message, message too short 
    if(userTextInput === ''){
      alert('Your message is empty, write something!');
      return;
    }
    if(userTextInput.indexOf(' ') < 1 || userTextInput.length < 5){
      alert('You can think of something better than that');
      return;
    }
    firebase.database().ref('messages/' + messages.length).set({
      text: userTextInput
    });
    // This reloads the page and makes you lose state: https://stackoverflow.com/questions/59417162/reactjs-href-causes-state-loss
    window.location.href = './thoughts';
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Route path='/' exact render={() => (
            <>
              <h1>
                What's on your mind?
              </h1>

              <h2>
                Write a joke, an idea, or just something random.
              </h2>
          
              <TextInput setText={setUserTextInput} defaultText={userTextInput} sendMessage={sendMessage}/>
          
              <GenericButton onClick={sendMessage} text="Share it with the world!"/>
            </>
          )}/>
          
          <Route path='/thoughts' render={() => (
            <>
              <ThoughtsPage thoughts={messages}/>
            </>
          )}/>

          <a
            className="App-link"
            href="https://github.com/LewisGRobotics"
            target="_blank"
            rel="noopener noreferrer">About
          </a>        
        </header>
      </div>
    </Router>    
  );
}

export default App;
