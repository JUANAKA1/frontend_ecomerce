import { RouterProvider } from 'react-router';
import AppRouter from './routers/AppRouter';
import { UserContextProvider } from './context/UserContext/UserContextProvider';

export default function EcomerceApp() {
    return (
        <>
            <UserContextProvider>
                <RouterProvider router={AppRouter} />
            </UserContextProvider>
        </>
    );
}
