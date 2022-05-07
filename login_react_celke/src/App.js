import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Login from "./pages/LoginUsuario";

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route  path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
