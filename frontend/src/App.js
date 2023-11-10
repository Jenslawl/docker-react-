import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import Otherpage from "./Otherpage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/"> Home </Link>
          <Link to="/otherpage"> Otherpage </Link>
        </header>
        <div>
          <Route exact path="/" Component={Fib} />
          <Route exact path="/otherpage" Component={Otherpage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
