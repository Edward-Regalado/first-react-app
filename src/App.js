import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';

class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <Main data={data} />
      <Footer />
    </div>
    );
  }
}

export default App;
