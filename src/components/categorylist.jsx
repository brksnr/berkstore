import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';


export const CategoryList = () => {
    const categories = useSelector(state => state.product.categories);

    

    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <div className="flex flex-col gap-14 lg:flex-row justify-between px-24">
            {topCategories.map((item) => (
                <Link to={`/shop/${item.gender}/${item.title}/${item.id}`} >
                    <div
                        key={item.id}
                        className="bg-cover bg-center w-80 h-80 flex items-center justify-center lg:w-72 lg:h-72 rounded-xl"
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
