import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductList, setTotal, setOffset } from '../actions/productActions';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CustomSelect } from './customSelects';
import { Link } from 'react-router-dom';

export const ProductList = () => {
    const [sort, setSort] = useState("");
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.productList);
    const total = useSelector(state => state.product.total);
    const offset = useSelector(state => state.product.offset);
    const { categoryId, gender, title } = useParams();

    const linkTo = `/shop/${gender}/${title}/${categoryId}/${sort}/${color}&limit=25&offset=${offset}`

    const fetchProducts = async () => {
        try {
            let endpoint = `https://workintech-fe-ecommerce.onrender.com/products?`;
            if (categoryId) {
                endpoint += `&category=${categoryId}`;
            }
            
            if (sort) {
                endpoint += `&sort=${sort}`;
            }
            
            if (color) {
                endpoint += `&filter=${color}`;
            }
            if (offset) {
                endpoint += `&limit=25&offset=${offset}`;
            }
            console.log("offset?:", linkTo)
            
            const response = await axios.get(endpoint);
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, [dispatch, categoryId, sort, color, offset]);

    return (
        <>
            <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:justify-between lg:w-full lg:px-28 ">
                <div>
                    <p className="font-inter font-bold text-gray-500">Showing all results</p>
                </div>
                <div className="flex gap-3 items-center font-inter">
                    <p className="text-gray-500">Views:</p>
                    <div className="flex gap-3">
                        <button className="border border-gray-400 rounded w-10 h-10"><i className="fa-solid fa-border-all"></i></button> 
                        <button className="border border-gray-400 rounded w-10 h-10"><i className="fa-solid fa-list"></i></button> 
                    </div>
                </div>
                <div>
                <Link to={linkTo} className="flex gap-4 items-center">
                    <CustomSelect setSort={setSort} setColor={setColor} />
                </Link>
                </div>
            </div>
            <div className="lg:flex lg:flex-wrap lg:gap-4 lg:justify-center">
                {products.map((product) => (
                     <Link to={`/shop/${gender}/${product.id}`}>
                    <div key={product.id} className="flex flex-col items-center w-80">
                        <div>
                            {product.images && product.images.length > 0 ? (
                                <img src={product.images[0].url} alt={product.name} />
                            ) : (
                                <p>Yükleniyor...</p>
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
                    </Link>
                ))}
            </div>
        </>
    );
};
