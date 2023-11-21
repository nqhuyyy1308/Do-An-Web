//CLI: npm install axios --save
import './App.css';
import './css/homepage.css';
// import './images/image1.png';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';

class App extends Component {
  render() {
    return (
    <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
    </MyProvider>
    );
  }
}
export default App;