import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MoviesList from "./Movies Collection/MoviesList";
import Home from "./Home/Home";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/home" component={Home} />
        <Route path="/movieslist" component={MoviesList} />
        <Route path="/about" component={About} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
