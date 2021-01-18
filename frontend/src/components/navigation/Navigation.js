import React from "react";
import { Switch } from "react-router-dom";
import ConnectedRoute from "../ConnectedRoute";
import Home from "../../screens/Home";
import Dashboard from "../../screens/Dashboard";
import NotFound from "../../screens/NotFound";
import Input from "../Input";
import Profile from "../../components/profile/Profile";
import Library from "../library/Library";
import Extractor from "../extractor/Extractor";
import Settings from "../../components/profile/settings/Settings";
import "./Navigation.css";
import DinoCard from "../dinocard/DinoCard";

export default function Navigation() {
  return (
    <Switch>
      <ConnectedRoute exact path="/" redirectIfAuthenticated component={Home} />
      <ConnectedRoute exact isProtected path="/dashboard" component={Dashboard} />
      <ConnectedRoute exact path="/user" component={Profile} />
      <ConnectedRoute path="/input" component={Input} />
      <ConnectedRoute path="/library" component={Library} />
      <ConnectedRoute exact path="/extractor" component={Extractor} />
      <ConnectedRoute path="/dinocard" component={DinoCard} />
      <ConnectedRoute exact path="/user/settings" component={Settings} />
      <ConnectedRoute path="*" component={NotFound} />
    </Switch>
  );
}
