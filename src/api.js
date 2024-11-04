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

export const fetchNewAddress = async (formData) => {
    const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/user/address', formData);
    return response.data;
};
export const fetchDeleteAddress = async (addressId) => {
    const response = await axios.delete(`https://workintech-fe-ecommerce.onrender.com/user/address/${addressId}`);
    return response.data;
};
export const fetchChangeAddress = async ({ formData }) => {
    const response = await axios.put(`https://workintech-fe-ecommerce.onrender.com/user/address`, formData);
    return response.data;
};

export const fetchGetCard = async () => {
    const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/user/card`);
    return response.data;
};

export const fetchNewCard = async (formData) => {
    const response = await axios.post(`https://workintech-fe-ecommerce.onrender.com/user/card`, formData);
    return response.data;
};

export const fetchDeleteCard = async (cardId) => {
    const response = await axios.delete(`https://workintech-fe-ecommerce.onrender.com/user/card/${cardId}`, cardId);
    return response.data;
};

export const fetchChangeCard = async (formData) => {
    const response = await axios.put(`https://workintech-fe-ecommerce.onrender.com/user/card`, formData);
    return response.data;
};

export const fetchOrder = async (formData) => {
    const response = await axios.post(`https://workintech-fe-ecommerce.onrender.com/order`, formData);
    return response.data;
};



