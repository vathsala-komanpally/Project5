import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from "@material-ui/core";
import { NavBar } from './components/userInterface/NavBar';
import { CategoriesNavBar } from './components/userInterface/CategoriesNavBar';
import { Cart } from './components/userInterface/Cart';
import { ItemsDisplay } from './components/userInterface/ItemsDisplay';
import {CheckOut} from './components/user/CheckOut';
import { AdminLoginBtn } from "./components/admin/AdminLoginBtn";
import { HomePage } from './components/pages/Home';
import { About } from './components/pages/About';
import { Catalogue } from './components/pages/Catalogue';
import { Reciepes } from './components/pages/Recipes';
import { Contact } from './components/pages/Contact';
import { CreateItem } from "./components/admin/CreateItem";
import { ReadItem } from "./components/admin/ReadItem";
import { UpdateItem } from "./components/admin/UpdateItem";
import { DeleteItem } from "./components/admin/DeleteItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    },
  }));

export const App = () => {
  const [cart, setCart] = useState([]);
  const classes= useStyles();
  console.log("this page refresh");
  console.log("cart Items:", cart);
  return (
    <div className="App">
    <Router>
    
      <Container>
      <Grid container spacing={3}>

       <Grid item xs={12}>
      <AdminLoginBtn />
        </Grid>
         
        <Grid item xs={12}>
        <NavBar cart={cart} />
        </Grid>
        <Grid item xs={2}>
           <CategoriesNavBar />
        </Grid>

        <Switch>
        <Grid item xs={10}>
          <Route path="/shop/:id"><ItemsDisplay cart={cart} setCart={setCart} /></Route>
          <Route exact path="/admin" component={AdminLoginBtn}></Route>
          <Route path="/home" component={HomePage} ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/catalogue" component={Catalogue} ></Route>
          <Route path="/reciepes" component={Reciepes}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/cart/checkout"><CheckOut cart={cart}/></Route>
          <Route path="/cart"><Cart cart={cart} /></Route>
          <Route path="/admin/CreateItem"><CreateItem /></Route>
          <Route path="/admin/ReadItem"><ReadItem /></Route>
        <Route path="/admin/UpdateItem"><UpdateItem /></Route>
        <Route path="/admin/DeleteItem"><DeleteItem /></Route>
        </Grid>
        </Switch>
        </Grid>
        </Container>
     
    </Router>
    </div>

  );
};