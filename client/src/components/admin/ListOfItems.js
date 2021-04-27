import React from 'react';

const ListOfItems = (props) => {
    const defaultValue={_id:0, itemname:"Select" };
    const groceryItems =[defaultValue,...props.groceryItems];
    return (
        <div className="displayItems">
            <label >Items in that category are:
            <select onChange={(e)=>{props.handleClick(e.target.value)}}>
                    {groceryItems.map((el) => {
                        return <option key={el._id} value={el.itemname}>{el.itemname}</option>;
                    })};
            </select>
            </label>
        </div>
    )
}

export { ListOfItems };