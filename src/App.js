import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Introduction />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
