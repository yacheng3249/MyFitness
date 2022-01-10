import React from 'react';
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUS from './pages/AboutUs';
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* Switch stops as soon as it finds the first match. */}
          <Route path="/MyFitness" exact>
            <AboutUS />
          </Route>
          <Route path="/MyFitness/work" exact>
            <OurWork />
          </Route>
          <Route path="/MyFitness/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/MyFitness/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
