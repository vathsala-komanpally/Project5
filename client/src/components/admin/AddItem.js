import React from 'react';
import { useEffect, useState } from 'react';
import { ListOfCategories } from "./ListOfCategories";

const AddItem = () => {
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

    const handleAddCategoryNameSubmit = () => {
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
    const handleAddItemClick = () => {
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
        <div className="addItem">
            <h1>Add new category/items</h1>
            <div className="addCategoryName">
                <h4>Add New Category:</h4>
                <label>Enter name of category:
                <input name="name" onChange={(e) => { setCategoryName({ [e.target.name]: e.target.value }) }} className="newcategoryname" placeholder="Enter a name of category" />
                </label><br />
                <button type="submit" onClick={handleAddCategoryNameSubmit} className="btnnewcategoryname" >Add category</button> or
            </div>

            <h4>Add New Items to the category:</h4>
            <ListOfCategories categories={categories} handleClick={handleClickCategory} />
            <div className="itemDetails">
                <div className="ItemName">
                    <label>Name of item:
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

            <button type="submit" onClick={handleAddItemClick} className="btnAddItem">Add Item</button>
        </div>
    )
}

export { AddItem };