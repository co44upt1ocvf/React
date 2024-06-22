import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';
import Footer from './components/Footer';
import './App.css';
import './styles/Container.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Title />
        <Block1 />
        <Block2 />
        <Block3 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
