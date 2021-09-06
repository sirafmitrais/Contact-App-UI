import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import LoginPage from './pages/auth/Login'
import RegisterPage from "./pages/auth/Register";
import LandingPage from "./pages/main/LandingPage";
import UserDashboard from "./pages/main/UserDashboard";
import ContactList from "./pages/main/ContactList";


function App() {
  return (
    <div className="App">
      <h1>Head Hunter</h1>

      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/dashboard">
            <UserDashboard></UserDashboard>
          </Route>
          <Route path="/Contact">
            <ContactList></ContactList>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
