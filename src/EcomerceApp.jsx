import { RouterProvider } from 'react-router';
import AppRouter from './routers/AppRouter';
import { UserContextProvider } from './context/UserContext/UserContextProvider';
import { Toaster } from 'react-hot-toast';

export default function EcomerceApp() {
    return (
        <>
            <UserContextProvider>
                <RouterProvider router={AppRouter} />
                <Toaster />
            </UserContextProvider>
        </>
    );
}
