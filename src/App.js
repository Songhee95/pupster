import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import Search from "./components/Search/Search";

function App() {
  return (
    <Router>
      <Route exact path="/" component={About} />
      <Route exact path="/Discover" component={Discover} />
      <Route exact path="/Search" component={Search} />
    </Router>
  );
}

export default App;
