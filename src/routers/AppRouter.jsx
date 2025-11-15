import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { DetailProduct } from '../pages/DetailProduct';
import { DashboardLayout } from '../layout/DashboardLayout';
import { TableProductDashboard } from '../components/AdminDasboard/TableProductDashboard/TableProductDashboard';
import { CreateProduct } from '../pages/CreateProduct';
import { UpdateProduct } from '../pages/UpdateProduct';

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
    {
        path: '/admin/dashboard/',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <TableProductDashboard />,
            },
            {
                path: 'products',
                element: <TableProductDashboard  />,

            },
            {
                path: 'products/createProduct',
                element: <CreateProduct />,
            },
            {
                path: 'products/updateProduct/:id',
                element: <UpdateProduct/>,
            },
        ],
    },
]);
export default AppRouter;
