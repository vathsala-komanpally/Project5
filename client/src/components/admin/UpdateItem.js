import React, { useState, useEffect } from 'react'
import { ListOfCategories } from "./ListOfCategories";
import { ListOfItems } from "./ListOfItems";

const UpdateItem = () => {
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

    //Write a function to fetch particular category Item names again after adding them 


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

    const handleUpdateCategorySubmit = () => {
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
        const selectedItemNamePassing = {
            itemname: itemName,
            price: '',
            noOfItems: '',
            image: ''
        };
        setItems(selectedItemNamePassing);
        const foundItemId = groceryItems.find((element) => {
            return element.itemname === itemName;
        });
        const ItemId = { _id: foundItemId._id };
        setSelectedItemId(ItemId);
    }

    const handleChange = (e) => {
        const newItemState = { ...items, [e.target.name]: e.target.value };
        setItems(newItemState);
    }

    const handleUpdateItemSubmit = () => {
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
        <div className="updateItem">
            <h1>Update items</h1>
            <ListOfCategories categories={categories} handleClick={handleClickCategory} />

            <div className="updateCategoryName">
                <label >Selected category name:
                <input value={updateCategoryName} name="name" onChange={handleChangeUpdateCategoryName} placeholder="Enter a name of category" />
                </label>
            </div>
            <button type="submit" onClick={handleUpdateCategorySubmit} className="btn btn-primary">Update Category</button>
            <ListOfItems groceryItems={groceryItems} handleClick={handleClickItems} />
            <div className="itemDetails">
                <div className="ItemName">
                    <label>Selected item name:
                <input name="itemname" value={items.itemname} onChange={handleChange} placeholder="Enter a name of the item to add" />
                    </label>
                </div>

                <div className="ItemPrice">
                    <label >Price:
                <input name="price" value={items.price} onChange={handleChange} placeholder="Enter a price of item" />
                    </label>
                </div>
                <div className="no.OfItems">
                    <label >Number Of Items:
                <input name="noOfItems" value={items.noOfItems} onChange={handleChange} placeholder="Enter no. of items" />
                    </label>
                </div>
                <div className="imageOfItem">
                    <label >image Url:
                <input name="image" value={items.image} onChange={handleChange} placeholder="Paste Url link here" />
                    </label>
                </div>
            </div>

            <button type="submit" onClick={handleUpdateItemSubmit} className="btn btn-primary">Update Item</button>
        </div>

    )
}

export { UpdateItem };
{/* <div className="updateItem">
<h1>Update items</h1>
<div className="displayCategories">
    <label >Choose a category:</label>
    <select name="categoryId" id="categories">
        <option value=""></option>
    </select>
</div>

<div className="updateCategoryName">
    <label >Category name:</label>
    <input className="form-control" id="categoryname" placeholder="Enter a name of category" name="categoryname" />
</div>
<div className="displayItemNames">
    <label>Choose an item:</label>
    <select className="categoryitemname" name="categoryItemName" id="categoryItems">
    </select>
</div>
<div className="updateItemName">
    <label>Name of item</label>
    <input name="itemname" className="form-control" id="itemname" placeholder="Enter a name of the item to add" />
</div>
  <div className="updateItemName">
                <label>Name of item</label>
                <input name="itemname" className="form-control" id="itemname" placeholder="Enter a name of the item to add" />
            </div>

            <div className="updateItemPrice">
                <label>Price</label>
                <input name="price" className="form-control" id="price" placeholder="Enter a price of item" />
            </div>
            <div className="updateNo.OfItems">
                <label>Number Of Items</label>
                <input type="text" className="form-control" id="noofitems" placeholder="Enter no. of items" name="noofitems" />
            </div>
            <fieldset className="updateReadyToEat">
                <legend className="col-form-label">Ready to Eat?</legend>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatYes" name="readyToEat" value="true" />
                    <label >Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatNo" name="readyToEat" value="false" />
                    <label>No</label>
                </div></fieldset> */}
