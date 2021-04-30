import React, { useState } from 'react'
import { AppBar, Toolbar, Container } from '@material-ui/core';
import { Cart } from "./Cart";
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons";
import Badge from '@material-ui/core/Badge';
import { HomePage } from '../pages/Home';
import { About } from '../pages/About';
import { Catalogue } from '../pages/Catalogue';
import { Reciepes } from '../pages/Recipes';
import { Contact } from '../pages/Contact';


const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "brown"
    },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
}));

const navLinks = [
    { path: '/home', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/catalogue', title: 'Catalogue' },
    { path: '/reciepes', title: 'Reciepes' },
    { path: '/contact', title: 'Contact' },
];

const NavBar = (props) => {
    const classes = useStyles();
    const history = useHistory();


    const handleCart = () => {
        history.replace("/");
    }

    return (
        <Router>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Container className={classes.navbarDisplayFlex}>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />
                        </IconButton>
                        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {navLinks.map(({ title, path }) => (
                                <a href={path} key={title}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </a>
                            ))}
                            <ListItem button>
                                <Link to="/cart">
                                    <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                                        badgeContent={props.cart.length} color="primary" onClick={handleCart}>
                                        <ShoppingCartRoundedIcon />Cart
                                </Badge>
                                </Link>
                            </ListItem>
                          
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/cart"><Cart cart={props.cart} /></Route>
                <Route path="/home" component={HomePage} ></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/catalogue" component={Catalogue} ></Route>
                <Route path="/reciepes" component={Reciepes}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
        </Router>
    )
}

export { NavBar };
