import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from "./components";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

export default () => {
  const routes = [
    { path: "/", exact: true, component: Home },
    // { path: "/", exact: true, component: Home },
  ];

  const [isAuthenticated, setAuthenticated] = useState({
    key: "",
    sign: "",
  });

  useEffect(() => {
    if (localStorage.getItem("key") && localStorage.getItem("sign")) {
      setAuthenticated({
        key: localStorage.getItem("key"),
        sign: localStorage.getItem("sign"),
      });
    } else {
      setAuthenticated({
        key: "",
        sign: "",
      });
    }
  }, []);

  return (
    <>
      <Router>
        {isAuthenticated.key && isAuthenticated.sign ? (
          <Layout>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                {routes.map((route, key) => (
                  <Route
                    key={key}
                    path={route.path}
                    component={route.component}
                    exact
                  />
                ))}
                <Redirect from="*" to="/" />
              </Switch>
            </Suspense>
          </Layout>
        ) : (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path="/" component={Login} exact />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        )}
      </Router>
    </>
  );
};
