import axios from 'axios';

export const fetchProducts = async (params = {}) => {
    let endpoint = `https://workintech-fe-ecommerce.onrender.com/products?`;
    if (params.categoryId) endpoint += `&category=${params.categoryId}`;
    if (params.sort) endpoint += `&sort=${params.sort}`;
    if (params.color) endpoint += `&filter=${params.color}`;
    if (params.offset) endpoint += `&limit=25&offset=${params.offset}`;

    const response = await axios.get(endpoint);
    return response.data;
};

export const fetchProductDetail = async (productId) => {
    const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products/${productId}`);
    return response.data;
};

export const fetchCategories = async () => {
    const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/categories');
    return response.data;
};

export const fetchAdress = async () => {
    const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/user/address');
    return response.data;
};

export const fetchNewAddress = async () => {
    const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/user/address');
    return response.data;
};
