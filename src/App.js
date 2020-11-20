import React from "react";
import { Navbarapp, NavbarBottom } from "./navbar";
import Photoapp from "./photos";
import Contentapp from "./content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaypalReact from "./Paypalapp";
import { Card } from "reactstrap";
import Info from "./info";

const App = () => {
  return (
    <>
      <Router>
        <Navbarapp />
        <Switch>
          <Route exact path="/">
            <Photoapp />
            <Contentapp />
            <NavbarBottom />
          </Route>

          <Route path="/pay">
            <div>
              <center>
                <Card style={{ width: "18rem" }} className="p-5">
                  <PaypalReact />
                </Card>
              </center>
            </div>
          </Route>
          <Route path="/info">
            <Info />
            <NavbarBottom />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
