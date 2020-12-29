import { Switch, Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import AuthLayout from "../pages/_layouts/authLayout";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const history = createBrowserHistory();

const AuthRoutes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <AuthLayout>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Redirect to="/" />
      </AuthLayout>
    </Switch>
  </Router>
);

export default AuthRoutes;
