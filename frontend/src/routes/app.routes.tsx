import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import AppLayout from "../pages/_layouts/appLayout";

import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

const history = createBrowserHistory();

const AppRoutes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <AppLayout>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
      </AppLayout>
    </Switch>
  </Router>
);

export default AppRoutes;
