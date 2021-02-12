import React from 'react';
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUS from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUS />
    </div>
  );
}

export default App;
