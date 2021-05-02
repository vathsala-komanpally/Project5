import React from 'react';
import { useEffect, useState } from 'react';
import { ListOfCategories } from "./ListOfCategories";
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Paper, TextField, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

const AddItem = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState({ name: '' });
    const [selectedCategoryId, setSelectedCategoryId] = useState({ categoryId: '' });
    const [groceryItem, setGroceryItem] = useState({});
    const [items, setItems] = useState({
        itemname: '',
        price: '',
        noOfItems: '',
        image: ''
    });


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


    useEffect(() => {
        setItems(items);
    }, [items]);

    const handleCategorySubmit = () => {
        fetch('http://localhost:9000/api/groceryItems/category', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryName),
        }).then((response) => {
            return response.json();
        }).then((groceryCategory) => {
            const addedCategories = [...categories];
            addedCategories.push(groceryCategory);
            setCategories(addedCategories);
        });
    }

    const handleClickCategory = (categoryId) => {
        const CategoryId = { categoryId: categoryId };
        setSelectedCategoryId(CategoryId);
    }

    const handleChange = (e) => {
        const newItemState = { ...items, [e.target.name]: e.target.value };
        setItems(newItemState);
    }
    const handleItemSubmit = () => {
        const completeItemDetails = { ...items, ...selectedCategoryId };
        setGroceryItem(completeItemDetails);
        fetch('http://localhost:9000/api/groceryItems/new-item', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(completeItemDetails),
        }).then((response) => {
        });
    }

    return (
        <div className={classes.paper}>
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                Create </Typography>
            <Typography variant="h5" align="center" component="h2" gutterBottom>
                Create new category/ item </Typography>

            <Paper style={{ padding: 16 }}>
                <form onSubmit={handleCategorySubmit} noValidate>
                    <Typography variant="h6" align="center" component="h3" gutterBottom>
                        Create New Category </Typography>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                             id="standard-start-adornment"
                                fullWidth
                                required
                                name="name"
                                label="Enter Name Of Category:"
                                onChange={(e) => { setCategoryName({ [e.target.name]: e.target.value }) }}
                            />
                        </Grid>
                        <Grid item style={{ marginTop: 16 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                 >
                                Add category
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <form onSubmit={handleItemSubmit} noValidate>
                    <Typography variant="h6" align="center" component="h3" gutterBottom>
                    Create New Item </Typography>
           
            <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
            <ListOfCategories categories={categories} handleClick={handleClickCategory} />
            </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="itemname"
                                label="Name Of Item:"
                                value={items.itemname}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="price"
                                label="Price Of Item:"
                                value={items.price}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="noOfItems"
                                label="Number Of Items:"
                                value={items.noOfItems}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="image"
                                label="image Url:"
                                value={items.image}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item style={{ marginTop: 16 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                >
                                Add Item
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div >
    )
}

export { AddItem };