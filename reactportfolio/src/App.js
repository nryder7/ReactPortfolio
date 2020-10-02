import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
// import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Route exact path="/" />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
