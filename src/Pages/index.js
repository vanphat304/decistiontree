import React from "react";
import "../App.css";
import Header from "./header";
import Main from "./main";
import Navigation from "./navigation";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Overview from "./overview";

export default function index() {
  return (
    <>
      {/* <Navigation />
      <section className="home-section">
        <Header />
        <div className="home-content">
          <Routes>
            <Route path="/" component={Overview} />
          </Routes>
          <Routes>
            <Route path="/main" component={Main} />
          </Routes>
          <Main />
        </div>
      </section> */}
    </>
  );
}
