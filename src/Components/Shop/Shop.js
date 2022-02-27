import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products,setProduct] = useState(first10);
  const [cart,setCart] = useState([]);

  const handleProduct = gainProduct =>{
      const newCart = [...cart,gainProduct];
      setCart(newCart);
  }

    return (
        <div className='shop-container'>
            <div className="product-container">
            
                {
                    products.map(product => <Product
                        handleProduct={handleProduct}
                         product={product}>
                         </Product>)
                }
            
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;