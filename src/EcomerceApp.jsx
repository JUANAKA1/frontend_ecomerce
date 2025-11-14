import { RouterProvider } from 'react-router';
import AppRouter from './routers/AppRouter';
import { UserContextProvider } from './context/UserContext/UserContextProvider';
import { Toaster } from 'react-hot-toast';
import { ProductContextProvider } from './context/ProductContext/ProductContextProvider';

export default function EcomerceApp() {
    return (
        <>
            <UserContextProvider>
                <ProductContextProvider>
                    <RouterProvider router={AppRouter} />
                </ProductContextProvider>
                <Toaster />
            </UserContextProvider>
        </>
    );
}
