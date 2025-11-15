import api from './api/axios';

//agregar produto al carrito
export const addToCartService = async (userId, productId, quantity = 1) => {
    try {
        const response = api.post('/api/cart/add', {
            userId,
            productId,
            quantity,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al agregar producto al carrito', error);
    }
};

//servicio para obtener el carrito
export const getCartService = async (userId) => {
    try {
        const response = await api(`/api/cart/get/${userId}`);

        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el carrito', error);
    }
};
//servicio para actualizar la cantidad de un producto en el carrito
export const updateCartService = async (userId, productId, quantity) => {
    try {
        const response = await api.put(`/api/cart/update/${userId}`, {
            productId,
            quantity,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar el carrito', error);
    }
};

//eliminar producto del carrito
export const removeFromCartService = async (userId, productId) => {
    try {
        const response = await api.delete(`/api/cart/removeProduct/${userId}`, {
            data: { productId },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al eliminar un producto del carrito', error);
    }
};
//limpiar el carrito
export const clearCartService = async (userId) => {
    try {
        const response = await api.delete(`/api/cart/clear/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al limpiar el carrito', error);
    }
};

//obtener el total del carrito
export const getCartTotalService = async (userId) => {
    try {
        const response = await api(`/api/cart/total/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al limpiar el carrito', error);
    }
};
