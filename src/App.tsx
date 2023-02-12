import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContent from "./layout/main";
import "antd/dist/antd.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainContent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
