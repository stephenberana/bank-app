import React from "react";
import LoginForm from "../Login/loginform";
import Dashboard from "../Dashboard/dashboard";
import RegisterNow from "../Login/register-link";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/UserSlice";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/bank-app">{user ? <Dashboard /> : <LoginForm />}</Route>
          <Route path="/register-link">
            <RegisterNow />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
