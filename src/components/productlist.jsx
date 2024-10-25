import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductList, setTotal } from '../actions/productActions';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.productList);
    const total = useSelector(state => state.product.total);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const endpoint = categoryId 
                    ? `https://workintech-fe-ecommerce.onrender.com/products?category=${categoryId}`
                    : 'https://workintech-fe-ecommerce.onrender.com/products';
                const response = await axios.get(endpoint);
                dispatch(setProductList(response.data.products));
                dispatch(setTotal(response.data.total));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        
        fetchProducts();
    }, [dispatch, categoryId]);

    return (
        <div className="lg:flex lg:flex-wrap lg:gap-4 lg:justify-center">
            {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center w-80">
                    <div>
                        {product.images && product.images.length > 0 ? (
                            <img src={product.images[0].url} alt={product.name} />
                        ) : (
                            <p>yükleniyor...</p>
                        )}
                    </div>
                    <div className="flex flex-col items-center gap-2 pt-3 pb-16">
                        <p className="h5">{product.name}</p> 
                        <p className="grayP">Stok: {product.stock}</p> 
                        <p>
                            <span className="greenP">₺{product.price}</span> 
                        </p>
                        <div className="flex gap-1">
                            <button className="w-4 h-4 rounded-full bg-blue-500"></button>
                            <button className="w-4 h-4 rounded-full bg-green-800"></button>
                            <button className="w-4 h-4 rounded-full bg-orange-800"></button>
                            <button className="w-4 h-4 rounded-full bg-black"></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
