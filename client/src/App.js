import NavBar from "./share/UI/navbar/navbar";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import HomePage from "./homePage/pages/homePage";

import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/browse" component={HomePage} />
        <Redirect from="/" to="/browse"></Redirect>
      </Switch>
    </div>
  );
};

export default App;
