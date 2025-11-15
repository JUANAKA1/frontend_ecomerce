import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { DetailProduct } from '../pages/DetailProduct';
import { DashboardLayout } from '../layout/DashboardLayout';
import { TableProductDashboard } from '../components/AdminDasboard/TableProductDashboard/TableProductDashboard';
import { CreateProduct } from '../pages/CreateProduct';
import { UpdateProduct } from '../pages/UpdateProduct';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { PaymentSuccess } from '../pages/PaymentSuccess';
import { PaymentFailure } from '../pages/PaymentFailure';
import { Checkout } from '../pages/Checkout';
import { PaymentPending } from '../pages/PaymentPending';

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
            {
                path: '/checkout',
                element: <Checkout />,
            },
            {
                path: '/payment/success',
                element: <PaymentSuccess />,
            },
            {
                path: '/payment/failure',
                element: <PaymentFailure />,
            },

            {
                path: '/payment/pending',
                element: <PaymentPending />,
            },
        ],
    },

    {
        path: '/admin/dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <TableProductDashboard />,
            },
            {
                path: 'products',
                element: <TableProductDashboard />,
            },
            {
                path: 'products/createProduct',
                element: <CreateProduct />,
            },
            {
                path: 'products/updateProduct/:id',
                element: <UpdateProduct />,
            },
        ],
    },

    {
        path: '*',
        element: <Navigate to="/" replace />,
    },
]);

export default AppRouter;
