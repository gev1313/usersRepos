import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Users from './components/Users';
import Repos from './components/Repos';
import SingleUser from './components/sherd/SingleUser';
import SingleRepo from './components/sherd/SingleRepo';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
        <Route path="/users/:id">
            <SingleUser />
          </Route>
          
        <Route path="/repos/:id">
            <SingleRepo />
          </Route>
          <Route exact path="/">
            <p>"tun"</p>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/repos">
            <Repos/>
          </Route>
       
        </Switch>
    </Router>
  );
}

export default App;
