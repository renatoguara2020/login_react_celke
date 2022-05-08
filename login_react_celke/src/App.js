import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/LoginUsuario/index';
import formLogin from './pages/LoginUsuario/formLogin';
import formLogin2 from './pages/LoginUsuario/formLogin2';
import './App.css';


function App() {
  return (
    
      <Router>
        <Switch>
          <Route  path="/login" component={Login}/>
          <Route  path="/formLogin" component={formLogin}/>
          <Route  path="/formLogin2" component={formLogin2}/>

        </Switch>
      </Router>
    
  );
}

export default App;
