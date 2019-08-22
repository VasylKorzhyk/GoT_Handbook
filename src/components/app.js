import React from "react";
import HouseList from "./house-list";
import PersonPage from "./person-page";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Redirect from="/" exact to="/houses/1" />
        <Route path="/houses/:page" component={HouseList} />
        <Route path="/people/:id" component={PersonPage} />
        <Route path="/error" render={() => <h1>Error Page</h1>} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

App.propTypes = {};

export default App;
