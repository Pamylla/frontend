import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import { EditQueue } from "../pages/Edit-Queue";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/forgot-password" component={ForgotPassword} />

    <Route path="/company" component={Profile} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/edit-queue" component={EditQueue} isPrivate />
  </Switch>
);

export default Routes;
