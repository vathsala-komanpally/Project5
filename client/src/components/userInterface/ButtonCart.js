import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Cart } from './Cart';

const ButtonCart=(props) =>{
    const [cart, setCart] = useState([]);
    setCart(props.cart);

    const handleClick=()=>{
        //return <Cart cart={cart}/>;
    }
    return (
        <div>
             <Button variant="light" onClick={handleClick}>Cart  {cart.length}</Button>
        </div>
    )
}

export {ButtonCart};
