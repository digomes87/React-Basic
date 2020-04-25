import React from 'react';
import './App.css';
import Footer from './components/footer';
import  Header from './components/header';
import Footer2 from './components/footer2';

function App() {
  return (
    <div className="App">
      <Header info="Mensagem aqui"/>
      <Header idade="32" />
       <p>Vamos lá</p>
      <Footer page="By Diego Go" />
      <Footer2 title="footer usando class props" />
    </div>
  );
}

export default App;
