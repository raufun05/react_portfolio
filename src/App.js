import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Container from "./components/container";
import Navbar from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import Row from "./components/row";

function App() {
  return (
    <Router>
        <Container>
          <Row>
            <h1 className="rounded col-sm-12 col-lg-3">Raufun Patoary</h1>
            <Navbar/>
            {/* use switch if you want to add "*" path */}
            <Switch>
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} /> 
              <Route exact path={["/", "/about", "*"]} component={About} />
              </Switch>  
          </Row>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;

