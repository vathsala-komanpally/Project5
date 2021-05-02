import React from 'react';
import {TextField} from '@material-ui/core';

const ListOfItems = (props) => {
    const defaultValue={_id:0, itemname:"Select" };
    const groceryItems =[defaultValue,...props.groceryItems];
    return (
        <div className="displayItems">
            <TextField
          id="outlined-select-currency-native"
          select
          label="Item Names Of Selected Category:"
          onChange={(e)=>{props.handleClick(e.target.value)}}
          SelectProps={{
            native: true,
          }}
          helperText="Please choose an item from the above list:"
          variant="outlined"
        >
            {groceryItems.map((el) => {
                        return <option key={el._id} value={el.itemname}>{el.itemname}</option>;
                    })};
        </TextField>
        </div>
    )
}

export { ListOfItems };