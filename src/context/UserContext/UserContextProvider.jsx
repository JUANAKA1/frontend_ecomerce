import { useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import { getProfileService } from '../../services/authServices';

export const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const checkSession = async () => {
        try {
            setLoading(true);

            const userData = await getProfileService();
            setUserInfo(userData);
        } catch {
            setUserInfo({});
        } finally {
            setLoading(false);
        }
    };

    // 🔑 Obtener el ID del usuario autenticado
    const getUserId = () => userInfo?.id || null;

    // ✅ Saber si hay sesión activa
    const isAuthenticated = () => !!userInfo?.id;

    useEffect(() => {
        checkSession();
    }, []);

    return (
        <UserContext
            value={{
                userInfo,
                setUserInfo,
                loading,
                checkSession,
                getUserId,
                isAuthenticated,
            }}
        >
            {children}
        </UserContext>
    );
};
