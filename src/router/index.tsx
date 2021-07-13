import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import routesConfig, { loginComp } from "./routes";

const IRouter = (): ReactElement => {
  return (
    <Router>
      <Switch>
        {routesConfig.map((item) => {
          return (
            <Route
              key={item.name}
              path={item.path}
              exact
              render={(props: RouteProps) => {
                const token = localStorage.getItem("token");
                if (token === "123") {
                  return <item.component {...props} />;
                }
                return (
                  <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                  />
                );
              }}
            />
          );
        })}
        <Route path="/login" exact component={loginComp} />
        <Route path="/" exact render={() => <Redirect to="/home" exact />} />
        <Route path="*" exact render={() => <Redirect to="/404" exact />} />
      </Switch>
    </Router>
  );
};

export default IRouter;
