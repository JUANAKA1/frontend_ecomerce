import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { DetailProduct } from '../pages/DetailProduct';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'detailProduct/:id',
                element: <DetailProduct />,
            },
        ],
    },
]);
export default AppRouter;
