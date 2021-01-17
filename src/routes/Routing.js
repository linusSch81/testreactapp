import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecipeView } from "../view/RecipeView";
import { HomeView } from "../view/HomeView";
import { SignInView } from "../view/SignInView";
// import {PageNotFoundView} from '../view/PageNotFoundView'
export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/recipe" component={RecipeView} />

        <Route exact path="/sign-in" component={SignInView} />
        {/* <Route exact path="/" component={HomeView} /> */}
        {/* <Route component={PageNotFoundView}/> */}
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
