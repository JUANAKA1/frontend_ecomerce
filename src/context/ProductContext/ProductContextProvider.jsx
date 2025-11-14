import { useCallback, useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';
import api from '../../services/api/axios';

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [productLoading, setProductLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProducts = useCallback(async () => {
        try {
            const response = await api('/api/products');
            setProducts(response.data);
        } catch (error) {
            setError(error.message || 'Error al obtener los productos');
        } finally {
            setProductsLoading(false);
        }
    }, []);

    const getProductById = useCallback(async (id) => {
        setProductLoading(true);
        setProduct({});
        try {
            const response = await api(`/api/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            setError(error.message || 'Error al obtner el producto');
        } finally {
            setProductLoading(false);
        }
    }, []);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const value = {
        product,
        products,
        productLoading,
        productsLoading,
        error,
        getProducts,
        getProductById,
    };
    return <ProductContext value={value}>{children}</ProductContext>;
};
