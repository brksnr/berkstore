import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../actions/productActions';
import axios from 'axios';

export const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.product.categories);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/categories');
                dispatch(setCategories(response.data));
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [dispatch]);

    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <div className="flex flex-col gap-4 lg:flex-row justify-between px-24">
            {topCategories.map((item) => (
                <Link to={`/shop/${item.gender}/${item.title}/${item.id}`} key={item.id}>
                    <div
                        className="bg-cover bg-center w-80 h-80 flex items-center justify-center lg:w-72 lg:h-72"
                        style={{ backgroundImage: `url(${item.img})` }}
                    >
                        <div className="flex flex-col items-center gap-4 h4 text-white">
                            <p>{item.title}</p>
                            <p>{item.count}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
