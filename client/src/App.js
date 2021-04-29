import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { OperationsOfAdmin } from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { CategoriesNavBar } from './components/userInterface/CategoriesNavBar';
import {ItemsDisplay} from './components/userInterface/ItemsDisplay';

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Link to="/admin">Please Click here to do:Admin Operations</Link>
        <NavBar cart={cart} />
        <CategoriesNavBar/>
        <Switch>
          <Route path="/admin" component={OperationsOfAdmin}></Route>
          <Route path="/shop/:id"><ItemsDisplay cart={cart} setCart={setCart}/></Route>
        </Switch>
      </Router>
    </div>
  );
};