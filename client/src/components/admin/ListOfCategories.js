import React from 'react';
import {TextField} from '@material-ui/core';

const ListOfCategories = (props) => {
    const defaultValue={_id:0, name:"Select" };
    const categories =[defaultValue,...props.categories];
    return (
        <div className="displayCategories">
        <TextField
          id="outlined-select-currency-native"
          select
          label="Category Names"
          onChange={(e)=>{props.handleClick(e.target.value)}}
          SelectProps={{
            native: true,
          }}
          helperText="Please choose a category:"
          variant="outlined"
        >
           {categories.map((el) => {
                        return <option key={el._id} value={el._id}>{el.name}</option>;
                    })};
        </TextField>
        </div>
    )
}

export { ListOfCategories };
