import React from "react";
import Nav from "./Nav";
import About from "./About";
import Contacts from "./Contacts";
import Shop from "./Shop";
import Home from "./Home";
import ItemDetail from "./ItemDetail";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
