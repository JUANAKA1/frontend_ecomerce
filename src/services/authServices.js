import api from './api/axios';

export const getProfileService = async () => {
    try {
        const response = await api('/api/auth/profile');
        console.log(response);
        
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el perfil', error);
    }
};

export const loginService = async () => {};

export const registerService = async (data) => {
    try {
        const response = await api.post('/api/auth/register', data, {
            headers: { 'Content-Type': 'application/json' },
        });

        return response.data;
    } catch (error) {
        console.error('Error al registrarse', error.response?.data);
        throw error;
    }
};

export const logoutService = async () => {};
