import React from 'react';
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUS from './pages/AboutUs';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUS />
    </div>
  );
}

export default App;
