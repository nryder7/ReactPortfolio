import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";



function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Wrapper>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
