import React,{useEffect, useState} from 'react';
import { ListOfCategories } from "./ListOfCategories";
import { ListOfItems } from "./ListOfItems";

const DeleteItem = () => {
    const [categories, setCategories] = useState([]);
    const [groceryItems, setGroceryItems] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState({ categoryId: '' });
    const [selectedItemId, setSelectedItemId] = useState({_id:''});

    useEffect(() => {
        GETDataOfCategories();
    }, []);

    const GETDataOfCategories=()=>{
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
        if(categoryId==="0"){
            return;}
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

    const handleDeleteCategoryNameSubmit=()=>{
        fetch(`http://localhost:9000/api/groceryItems/delete-category/${selectedCategoryId.categoryId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
        })
        GETDataOfCategories();
    }

    const handleClickItems=(itemName)=>{
        if(itemName==="Select"){
            return;}
        const foundItemId = groceryItems.find((element) => {
            return element.itemname === itemName;
        });

        const ItemId = { _id: foundItemId._id };
        setSelectedItemId(ItemId);
    }

    const handleDeleteItemNameSubmit=()=>{
        fetch(`http://localhost:9000/api/groceryItems/delete-item/${selectedItemId._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
        })
    }
    return (
        <div className="deleteItem">
            <h1>Delete</h1>
            <ListOfCategories categories={categories} handleClick={handleClickCategory} />

            <div className="deleteCategoryName">
            <button type="submit" onClick={handleDeleteCategoryNameSubmit} >Delete Category</button> or
            </div>
            <ListOfItems groceryItems={groceryItems} handleClick={handleClickItems}/>

            <div className="deleteItemName">
            <button type="submit" onClick={handleDeleteItemNameSubmit} >Delete Item</button>
            </div>
        </div>
    )
}

export { DeleteItem };
