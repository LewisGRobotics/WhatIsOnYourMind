import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ShareButton from './components/ShareButton';
import TextInput from './components/TextInput';
import ThoughtsPage from './components/ThoughtsPage';
import {useState , useEffect} from 'react';

const App = () =>  {

  const [userTextInput, setUserTextInput] = useState('');
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch('http://localhost:5000/messages');
    const data = await res.json();
    return data;
  }
  
  useEffect(() => {
    const getMessages = async () => {
      const messagesFromServer = await fetchMessages();
      console.log(messagesFromServer);
      
      setMessages(messagesFromServer);
    }

    getMessages();
  }, [])

  const sendMessage = async () => {
    if(userTextInput !== ''){
      console.log(JSON.stringify(userTextInput))
      
      const messagesFromServer = await fetchMessages();
      const obj = {
        id: messagesFromServer[messagesFromServer.length],
        text: userTextInput
      }

      const res = await fetch('http://localhost:5000/messages', {
        method:'POST',
        headers: {'Accept': 'application/json', 'Content-type': 'application/json'},
        body: JSON.stringify(obj)
      })
      
      const data = await res.json();
      setMessages([...messages, obj]);
      // This reloads the page and makes you lose state: https://stackoverflow.com/questions/59417162/reactjs-href-causes-state-loss
      window.location.href = './thoughts';
    }
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
          
              <ShareButton onClick={sendMessage}/>
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
