import React, { useState } from 'react';
import fakeData from '../../fakeData/Index'
import './info.css'
import Details from '../Details/Details';

import Cart from '../Cart/Cart';

const Info = () => {

    const allInfo = fakeData
    const [info, addInfo] = useState(allInfo)
    const [cart, setCart] = useState([])

    const handleAddProduct = (info) => {
        console.log("info added", info);
        const newCart = [...cart, info]
        setCart(newCart)

    }

    return (
        <div className="shop-container">

            <div className='product-container'>

                {
                    info.map(info => <Details
                        handleAddProduct={handleAddProduct}
                        details={info}
                    >{info.name}</Details>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Info;