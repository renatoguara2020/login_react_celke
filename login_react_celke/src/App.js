import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/LoginUsuario/index';


function App() {
  return (
    
      <Router>
        <Switch>
          <Route  path="/login" component={Login}/>
        </Switch>
      </Router>
    
  );
}

export default App;
