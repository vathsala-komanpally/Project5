import React,{useState, useEffect} from 'react'

const ItemDetails=(props)=> {
    const NameOfItem=props.itemNameSelected.itemname;
    console.log("name of item here", NameOfItem)
    const [items, setItems]=useState({itemname:'',
    price:'',
    noOfItems:''});
  
    useEffect(()=>{
        setItems(items);
    },[items]);
    console.log("neew items",items);
    const handleChange=(e)=>{
        const newItemState={...items, [e.target.name]:e.target.value};
        setItems(newItemState);
        console.log("itemDetails are:",items);
        props.entered(items);
    }
    return (
        <div className="itemDetails">
             <div className="ItemName">
                <label>Name of item:
                <input name="itemname" value={items.itemname} onChange={handleChange} placeholder="Enter a name of the item to add"  />
                </label>
            </div>

            <div className="ItemPrice">
                <label >Price
                <input name="price" value={items.price} onChange={handleChange} placeholder="Enter a price of item"/>
                </label>
            </div>
            <div className="no.OfItems">
                <label >Number Of Items
                <input name="noOfItems" value={items.noOfItems} onChange={handleChange} placeholder="Enter no. of items"/>
                </label>
            </div>
        </div>
    )
}

export {ItemDetails};
