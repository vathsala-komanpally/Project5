import React, { useEffect, useState } from 'react';
import { ListOfCategories } from "./ListOfCategories";
import { ListOfItems } from "./ListOfItems";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

const DeleteItem = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [groceryItems, setGroceryItems] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState({ categoryId: '' });
    const [selectedItemId, setSelectedItemId] = useState({ _id: '' });

    useEffect(() => {
        GETDataOfCategories();
    }, []);

    const GETDataOfCategories = () => {
        fetch('http://localhost:9000/api/groceryItems/category/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            return response.json();
        }).then((groceryCategories) => {
            console.log("grocery Categories", groceryCategories);
            setCategories(groceryCategories);
        });
    }

    const handleClickCategory = (categoryId) => {
        if (categoryId === "0") {
            return;
        }
        const CategoryId = { categoryId: categoryId };
        setSelectedCategoryId(CategoryId);
        fetch(`http://localhost:9000/api/groceryItems/category/${categoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            return response.json();
        }).then((items) => {
            setGroceryItems(items);
        });
    }

    const handleDeleteCategorySubmit = () => {
        fetch(`http://localhost:9000/api/groceryItems/delete-category/${selectedCategoryId.categoryId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
        })
        GETDataOfCategories();
    }

    const handleClickItems = (itemName) => {
        if (itemName === "Select") {
            return;
        }
        const foundItemId = groceryItems.find((element) => {
            return element.itemname === itemName;
        });

        const ItemId = { _id: foundItemId._id };
        setSelectedItemId(ItemId);
    }

    const handleDeleteItemSubmit = () => {
        fetch(`http://localhost:9000/api/groceryItems/delete-item/${selectedItemId._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
        })
    }
    return (
        <div className={classes.paper}>
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                Delete </Typography>
            <Typography variant="h5" align="center" component="h2" gutterBottom>
                Delete category / item </Typography>

            <Paper style={{ padding: 16 }}>
                <form onSubmit={handleDeleteCategorySubmit} noValidate>
                    <Typography variant="h6" align="center" component="h3" gutterBottom>
                        Delete Category</Typography>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <ListOfCategories categories={categories} handleClick={handleClickCategory} />
                        </Grid>
                        <Grid item style={{ marginTop: 16 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Delete Category
                            </Button>
                        </Grid>
                    </Grid>
                </form><br />
                <form onSubmit={handleDeleteItemSubmit} noValidate>
                    <Typography variant="h6" align="center" component="h3" gutterBottom>
                        Delete Item</Typography>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <ListOfItems groceryItems={groceryItems} handleClick={handleClickItems} />
                        </Grid>
                        <Grid item style={{ marginTop: 16 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Delete Item
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}

export { DeleteItem };
