// App.js
import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Router>    
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
