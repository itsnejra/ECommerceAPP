import logo from './logo.svg';
import './App.css';
import Header from './common/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      
     
      <Router>
      <Header/>
      <Switch>
         { /*<Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
  </Route>*/}
        </Switch>
      
    </Router>
    </>
  )
}

export default App
