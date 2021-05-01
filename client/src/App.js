import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { OperationsOfAdmin } from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { CategoriesNavBar } from './components/userInterface/CategoriesNavBar';
import { ItemsDisplay } from './components/userInterface/ItemsDisplay';
import { SignIn } from './components/user/SignIn';
import { AdminLoginBtn } from "./components/admin/AdminLoginBtn";
import { HomePage } from './components/pages/Home';
import { About } from './components/pages/About';
import { Catalogue } from './components/pages/Catalogue';
import { Reciepes } from './components/pages/Recipes';
import { Contact } from './components/pages/Contact';
import { Cart } from "./components/userInterface/Cart";

export const App = () => {
  const [cart, setCart] = useState([]);

  console.log("this page refresh");
  console.log("cart Items:", cart);
  return (
    <Router>
      <div className="App">
        <AdminLoginBtn />
        <NavBar cart={cart} />
        <CategoriesNavBar cart={cart} setCart={setCart} />
        <Switch>
          <Route path="/shop/:id"><ItemsDisplay cart={cart} setCart={setCart} /></Route>
          <Route path="/admin" component={AdminLoginBtn}></Route>
          <Route path="/home" component={HomePage} ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/catalogue" component={Catalogue} ></Route>
          <Route path="/reciepes" component={Reciepes}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/cart/checkout" component={SignIn}></Route>
        </Switch>
      </div>
    </Router>

  );
};