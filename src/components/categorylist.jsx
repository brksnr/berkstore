import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { id: 1, title: "CLOTHS", count: "5 Items", imageUrl: "/images/shop/shop1.png", gender: "kadin" },
    { id: 2, title: "SHOES", count: "7 Items", imageUrl: "/images/shop/shop2.png", gender: "erkek" },
    { id: 3, title: "ACCESSORIES", count: "3 Items", imageUrl: "/images/shop/shop3.png", gender: "kadin" },
    { id: 4, title: "ACCESSORIES", count: "4 Items", imageUrl: "/images/shop/shop4.png", gender: "erkek" },
    { id: 5, title: "ACCESSORIES", count: "10 Items", imageUrl: "/images/shop/shop5.png", gender: "kadin" },
];

export const CategoryList = () => {
    return (
        <div className="flex flex-col gap-4 lg:flex-row justify-between px-24">
            {categories.map((item) => (
                <Link to={`/shop/${item.gender}/${item.title.toLowerCase()}`} key={item.id}>
                    <div
                        className="bg-cover bg-center w-80 h-80 flex items-center justify-center lg:w-72 lg:h-72"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
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
