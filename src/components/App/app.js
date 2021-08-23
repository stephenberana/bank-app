import React from "react";
import LoginForm from "../Login/loginform";
import Dashboard from "../Dashboard/dashboard";
import RegisterNow from "../Login/register-link";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/bank-app">
              <LoginForm />
            </Route>
            <Route path="/register-link">
              <RegisterNow />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
