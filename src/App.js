import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

import { Route, BrowserRouter as Router } from "react-router-dom";

import { useState } from "react";

import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => (
          <div className="app">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
              <Introduction />
              <Portfolio />
              <Contact />
            </div>
          </div>
        )}
      />
    </Router>
  );
}

export default App;
