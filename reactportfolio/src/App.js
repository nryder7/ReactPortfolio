import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
// import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
