import React from 'react';

const ListOfCategories = (props) => {
    const defaultValue={_id:0, name:"Select" };
    const categories =[defaultValue,...props.categories];
    return (
        <div className="displayCategories">
            <label >Choose a category:
            <select onChange={(e)=>{props.handleClick(e.target.value)}}>
                    {categories.map((el) => {
                        return <option key={el._id} value={el._id}>{el.name}</option>;
                    })};
            </select>
            </label>
        </div>
    )
}

export { ListOfCategories };
