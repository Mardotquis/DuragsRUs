import React, { Component } from "react";

// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import "./assets/css/App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />

            <Route path="/products" component={Products} />

            <Route path="/contact" component={Contact} />

            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
