import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/common/customers";
import Rental from "./components/common/rental";
import NotFound from "./components/common/notFound";
import NavBar from "./components/common/navBar";
import MovieForm from "./components/common/movieForm";
import LoginForm from "./components/common/loginForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login/" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rental" component={Rental}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
