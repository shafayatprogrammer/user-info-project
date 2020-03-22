import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUsers } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    const cart = props.cart;
    const totalSalary = cart.reduce((total, info) => total + info.salary, 0);
    return (
        <div>
            <FontAwesomeIcon className="icon" icon={faUsers} />
            <h5>Users Summary</h5>
            <br />
            <p>User Selected: {cart.length}</p>
            <p>Total salary count: {totalSalary} </p>
        </div>
    );
};

export default Cart;