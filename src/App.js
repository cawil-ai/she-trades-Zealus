import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Index from "./screens/Index";
import JobPosting from "./screens/Jobs.js";
import Libraries from "./screens/Libraries.js";
import Startup from "./screens/Startup.js";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/Index/" exact component={Index} />
      <Route exact path="/Libraries/" component={Libraries }/>
      <Route exact path="/Startup/" component={Startup }/>
      <Route exact path="/Jobs/" component={JobPosting }/>
    </Router>
  );
}

export default App;
