import { RouterProvider } from 'react-router';
import AppRouter from './routers/AppRouter';
import { UserContextProvider } from './context/UserContext/UserContextProvider';
import { Toaster } from 'react-hot-toast';
import { ProductContextProvider } from './context/ProductContext/ProductContextProvider';
import { CartContextProvider } from './context/CartContext/CartContextProvider';

export default function EcomerceApp() {
    return (
        <>
            <UserContextProvider>
                <ProductContextProvider>
                    <CartContextProvider>
                        <RouterProvider router={AppRouter} />
                    </CartContextProvider>
                </ProductContextProvider>
                <Toaster />
            </UserContextProvider>
        </>
    );
}
