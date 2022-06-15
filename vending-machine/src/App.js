import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Pop from "./Pop";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/pop" exact>
          <Pop />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/sardines" exact>
          <Sardines />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
