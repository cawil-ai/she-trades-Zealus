import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Index from "./screens/Index";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/Index/" exact component={Index} />
    </Router>
  );
}

export default App;
