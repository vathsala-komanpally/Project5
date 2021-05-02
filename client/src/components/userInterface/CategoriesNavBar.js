import React, { useEffect, useState } from 'react'
import { Link} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 250;
const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth,
    top: theme.spacing(11),
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
    <Drawer variant="permanent" 
      classes={{
        paper: classes.drawerPaper,
      }}>
        <List >
          {categories.map((categoryDetails) => (
            <Link to={`/shop/${categoryDetails._id}`} key={categoryDetails._id}>
               <ListItem button ><strong>
               <ListItemText style={{ color: 'brown'}} primary={`${categoryDetails.name}  >`} />
               </strong>
              </ListItem>
              
            </Link>
          ))}
        </List>
    </Drawer>
  )
}

export { CategoriesNavBar };


