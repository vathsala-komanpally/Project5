import React, { useState, useEffect } from 'react'
import { ListOfCategories } from "./ListOfCategories";
import { ListOfItems } from "./ListOfItems";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

const ReadItem = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [groceryItems, setGroceryItems] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState({ categoryId: '' });
    const [selectedItemId, setSelectedItemId] = useState({ _id: '' });
    const [updateCategoryName, setUpdateCategoryName] = useState('');
    const [items, setItems] = useState({
        itemname: '',
        price: '',
        noOfItems: '',
        image: ''
    });

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

    const GETDataOfItemsInSelectedCategory = (categoryId) => {
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

    const handleClickCategory = (categoryId) => {
        if (categoryId === "0") {
            return;
        }
        const CategoryId = { categoryId: categoryId };
        setSelectedCategoryId(CategoryId);
        const foundCategoryName = categories.find((element) => {
            return element._id === categoryId;
        });
        console.log("Choosen category name", foundCategoryName);
        setUpdateCategoryName(foundCategoryName.name);
        GETDataOfItemsInSelectedCategory(categoryId);
    }

    const handleChangeUpdateCategoryName = (e) => {
        setUpdateCategoryName(e.target.value);
    }

    const handleCategorySubmit = () => {
        const updateCategory = { name: updateCategoryName };
        fetch(`http://localhost:9000/api/groceryItems/update-category/${selectedCategoryId.categoryId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateCategory),
        }).then((response) => {
            console.log("responses", response);
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
        const selectedItemNamePassing = {
            itemname: itemName,
            price: foundItemId.price,
            noOfItems: foundItemId.noOfItems,
            image: foundItemId.image,
        };
        setItems(selectedItemNamePassing);
        
        const ItemId = { _id: foundItemId._id };
        setSelectedItemId(ItemId);
    }

    const handleChange = (e) => {
        const newItemState = { ...items, [e.target.name]: e.target.value };
        setItems(newItemState);
    }

    const handleItemSubmit = () => {
        fetch(`http://localhost:9000/api/groceryItems/update-item/${selectedItemId._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(items),
        }).then((response) => {
            console.log("responses", response);
        })
        GETDataOfItemsInSelectedCategory(selectedCategoryId.categoryId);
    }


    return (
        <div className={classes.paper}>
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                Read </Typography>
            <Typography variant="h5" align="center" component="h2" gutterBottom>
                Read category names/ item details </Typography>

            <Paper style={{ padding: 16 }}>
                <form onSubmit={handleCategorySubmit} noValidate>
                    <Typography variant="h6" align="center" component="h3" gutterBottom>
                        Read Category Names </Typography>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <ListOfCategories categories={categories} handleClick={handleClickCategory} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-start-adornment"
                                fullWidth
                                required
                                name="name"
                                label="Name Of Selected Category:"
                                value={updateCategoryName}
                                onChange={handleChangeUpdateCategoryName}
                            />
                        </Grid>
                    </Grid>
                </form><br/>
                <form onSubmit={handleItemSubmit} noValidate>
                    <Typography variant="h6" align="center" component="h3" gutterBottom>
                        Read Item Details Of Selected Category </Typography>

                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <ListOfItems groceryItems={groceryItems} handleClick={handleClickItems} />
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
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}

export { ReadItem };
