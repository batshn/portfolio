import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from './Contents/NotFound';
import Home from "./Contents/Home";
import About from "./Contents/About";
import Work from "./Contents/Work";
import Contact from "./Contents/Contact";
import NavBar from "./Components/NavBar";
import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from 'react-bootstrap/Col';
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFoundPage} />
          </Switch>
      </Container>
    </Router>
  );
}

export default App;
