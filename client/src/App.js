import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { OperationsOfAdmin } from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { CategoriesNavBar } from './components/userInterface/CategoriesNavBar';
import {ItemsDisplay} from './components/userInterface/ItemsDisplay';
import {SignIn} from './components/user/SignIn';
import {AdminLoginBtn} from "./components/admin/AdminLoginBtn";
export const App = () => {
  const [cart, setCart] = useState([]);

  console.log("this page refresh");
  console.log("cart Items:",cart);
  return (
    <div className="App">
      <Router>
      <AdminLoginBtn/>
       <NavBar cart={cart} />
        <CategoriesNavBar/>
        <Switch>
          <Route path="/admin" component={AdminLoginBtn}></Route>
          <Route path="/shop/:id"><ItemsDisplay cart={cart} setCart={setCart}/></Route>
        </Switch>
      </Router>
    </div>
  );
};