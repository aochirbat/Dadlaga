import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import SignInSide from './screens/loginScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <SignInSide/>
      </header>
    </div>
  );
}

export default App;
