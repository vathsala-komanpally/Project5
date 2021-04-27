import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {AddItem} from "./AddItem";
import {UpdateItem} from "./UpdateItem";
import {DeleteItem} from "./DeleteItem";

const OperationsOfAdmin = () => { 
    return (
        <Router>
        <div>
        <div className="operationsofadmin">
            <h2>List of things Admin can do here:</h2>
            <div className="addItemInfoUser">
                <p className="addItemInfo">Click on Add: <br/>
                To add a new category name/item name in there or <br/>
                To add new item in the existing category name<br/>
                </p>
                <Link to="/admin/addItem">
                <button type="button" id="add" className="btn btn-primary" >Add</button>
                </Link>
            </div>
            <div className="updateItemInfoUser">
                <p className="updateItemInfo">Click on update: <br/>
                To update existing category or item deatils <br/>
                </p>
                <Link to="/admin/updateItem">
                <button type="button" id="update" className="btn btn-primary">Update</button>
                </Link>
                
            </div>
          
            <div className="deleteItemInfoUser">
                <p className="deleteItemInfo">Click on Delete: <br/>
                To delete a category or any item from particular category<br/>
                </p>
                <Link to="/admin/deleteItem">
                <button type="button" id="delete" className="btn btn-primary">Delete</button>
                </Link>
                
            </div>
            </div>
            <Switch>
            <Route path="/admin/addItem"><AddItem/></Route>
            <Route path="/admin/updateItem"><UpdateItem/></Route>
            <Route path="/admin/deleteItem"><DeleteItem /></Route>
            </Switch>
      </div>
      </Router>
       
           
      
    )
}

export {OperationsOfAdmin};
