import logo from "./logo.svg";
import "./App.css";
import Desciontree from "./Pages";
import Navigation from "./Pages/navigation";
import Header from "./Pages/header";
// import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/main";
import Overview from "./Pages/overview";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <section className="home-section">
          <Header />
          <div className="home-content">
            <Switch>
              <Route exact path="/overview" render={() => <Overview />} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/tree" component={Main} />
            </Switch>
          </div>
        </section>
      </Router>
    </>
  );
}

export default App;
