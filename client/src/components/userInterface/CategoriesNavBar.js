import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";

const CategoriesNavBar = () => {
  const [categories, setCategories] = useState([]);

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
    <List >
      {categories.map((categoryDetails) => (
        <Link to={`/shop/${categoryDetails._id}`} key={categoryDetails._id}>
          <ListItem button ><strong>
            <ListItemText style={{ color: 'brown' }} primary={`${categoryDetails.name}  >`} />
          </strong>
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

export { CategoriesNavBar };


