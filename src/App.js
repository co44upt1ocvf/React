import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Block1 />
      <Block2 />
      <Block3 />
      <Footer />
    </div>
  );
}

export default App;
