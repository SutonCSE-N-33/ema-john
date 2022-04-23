import React, { useState,useEffect } from 'react';  
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products,setProduct] = useState(first10);
  const [cart,setCart] = useState([]);
 
  useEffect(()=>{
        const savedCart = getStoredCart();
        const storeProductKeys = Object.keys(savedCart);
        const storeCart = storeProductKeys.map(pdKey => {
            const product = fakeData.find(pd => pd.key === pdKey);
            product.quantity = savedCart[pdKey];
            return product;
        }
        )
        setCart(storeCart)
  },[]);

  const handleProduct = gainProduct =>{
    
    const sameProduct = cart.find(pd => pd.key === gainProduct.key);
    let count = 1;
    let newCart;
    if(sameProduct){
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== gainProduct.Key);
        newCart = [...others,sameProduct];
    }else{
        gainProduct.quantity = 1;
        newCart = [...cart,gainProduct];
    }
      setCart(newCart);
      addToDb(gainProduct.key,count);
  }

    return (
        <div className='tween-container'>
            <div className="product-container">
            
                {
                    products.map(product => <Product
                        key = {product.key}
                        showAddToCart={true}
                        handleProduct={handleProduct}
                         product={product}>
                         </Product>)
                }
            
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
               <Link to="/review">
               <button className='mainButton'>Review Order</button>
            </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;