import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/common/customers";
import Rental from "./components/common/rental";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rental" component={Rental}></Route>
        <Redirect from="/" to="movies" />
      </Switch>
    </main>
  );
}

export default App;
