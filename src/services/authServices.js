import api from './api/axios';

export const getProfileService = async () => {
    try {
        const response = await api('/api/auth/profile');

        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el perfil', error);
    }
};

export const loginService = async (data, reset, setRedirect, setUserInfo) => {
    try {
        const response = await api.post('/api/auth/login', data, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            setUserInfo(response.data);
            reset();
            setRedirect(true);
            return {
                success: true,
                message: 'Inicio de sesión exitoso',
            };
        }
    } catch {
        return {
            success: false,
            message: 'Error al Iniciar Sessión',
        };
    }
};

export const registerService = async (
    data,
    reset,
    setRedirect,
    checkSession
) => {
    try {
        const response = await api.post('/api/auth/register', data, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 201 ) {
            await checkSession();
            reset();
            setRedirect(true);
            
            return { success: true };
        }
    } catch {
        return { success: false };
    }
};

export const logoutService = async () => {
    try {
        const response = await api.post('/api/auth/logout');
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'Error al cerrar la sesion'
        );
    }
};
