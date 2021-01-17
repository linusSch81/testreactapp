import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecipeView } from "../view/RecipeView";
import { HomeView } from "../view/HomeView";
// import {PageNotFound} from '../view/PageNotFound'
export const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/recipe" component={RecipeView} />
        <Route component={HomeView} />
        {/* <Route exact path="/" component={HomeView} /> */}
        {/* <Route component={PageNotFound}/> */}
      </Switch>
    </Router>
  );
};
