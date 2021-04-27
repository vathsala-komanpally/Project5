import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 250;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  itemList:{
    color:"brown",
    fontWeight: "bold"
  }
}));
const CategoriesNavBar = () => {
  const [categories, setCategories] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:9000/api/groceryItems/category/all', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      return response.json();
    }).then((groceryCategories) => {
      setCategories(groceryCategories);
    });
  }, []);

  return (
    <Router>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List className={classes.itemList}>
            {categories.map((categoryDetails) => (
              <ListItem button key={categoryDetails._id} component={Link} to={`/shop/${categoryDetails._id}`} color="primary">
                {categoryDetails.name} {'>'}
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  )
}

export { CategoriesNavBar };


