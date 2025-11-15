import api from './api/axios';

export const createOrder = async (orderData) => {
    try {
        const response = await api.post(`/api/orders/create`, orderData);
        return response.data;
    } catch (error) {
        throw new Error('Error al crear la orden', error);
    }
};
