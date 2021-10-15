import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Users from './components/Users';
import Repos from './components/Repos';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <p>"tun"</p>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/repos">
            <Repos/>
          </Route>
          <Route path="/users/id">
            <getSingleUser/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
