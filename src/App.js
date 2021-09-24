import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import MainPage from "./components/main_page/main";
import InfoPage from "./components/info_page/infoPage";
import Header from "./components/header/header";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/infoPage/:id" component={InfoPage} />
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
export default App;
