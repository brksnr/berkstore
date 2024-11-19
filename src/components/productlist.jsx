import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductList, setTotal } from '../actions/productActions';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CustomSelect } from './customSelects';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api';

export const ProductList = () => {
    const [sort, setSort] = useState("");
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.productList);
    const total = useSelector(state => state.product.total);
    const offset = useSelector(state => state.product.offset);
    const { categoryId, gender, title } = useParams();

    const linkTo = `/shop/${gender}/${title}/${categoryId}/${sort}/${color}&limit=25&offset=${offset}`

    const fetchProductListData = async () => {
        try {
            const data = await fetchProducts({ categoryId, sort, color, offset });
            dispatch(setProductList(data.products));
            dispatch(setTotal(data.total));
            console.log(data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProductListData();
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
                     <Link to={`/shop/${gender}/${product.id}`}  className=" transition-transform transform hover:scale-105 hover:shadow-lg">
                    <div key={product.id} className="flex flex-col items-center w-80">
                        <div>
                            {product.images && product.images.length > 0 ? (
                                <img src={product.images[0].url} alt={product.name} className="hover:opacity-90 rounded-xl" />
                            ) : (
                                <p><i class="fa-solid fa-spinner fa-spin"></i></p>
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
