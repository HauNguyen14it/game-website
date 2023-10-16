import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import { connect } from "react-redux";

interface IProps {}

const App: React.FunctionComponent<IProps> = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = () => {};

export default connect(mapStateToProps)(App);
