import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
   const {productKey} = useParams();
   const product = fakeData.find(pd => productKey === pd.key);
    return (
        <div>
            <h1>This is ProductDetails Page</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;