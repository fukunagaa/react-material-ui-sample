import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./components/Home";

import ButtonHome from "./components/buttons/ButtonHome";
import ButtonSample1 from "./components/buttons/ButtonSample1";

import BoxHome from "./components/boxs/BoxHome";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Buttons/:article" component={ButtonHome}></Route>
        <Route exact path="/Boxs/:article" component={BoxHome}></Route>
      </Layout>
    </Router>
  );
}

export default App;
