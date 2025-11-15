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

    // Funcion para actualizar un producto
    const updateProduct = useCallback(async (id, data) => {
        const cleanData = {
            name: data.name,
            description: data.description,
            price: Number(data.price),
            stock: Number(data.stock),
            imageUrl: data.imageUrl,
        };

        try {
            const response = await api.put(`/api/products/${id}`, cleanData, {
                withCredentials: true,
            });

            if (response.status === 200) {
                // Actualizar el producto individual
                setProduct(response.data);
                // Actualizar el producto en la lista de productos
                setProducts((prevProducts) =>
                    prevProducts.map((p) => (p._id === id ? response.data : p))
                );

                return {
                    success: true,
                    message: 'Producto actualizado correctamente',
                };
            }
        } catch (error) {
            setError(error.message || 'Error al actualizar el producto');
            return {
                success: false,
                message: 'Error al actualizar el producto',
            };
        } finally {
            setProductsLoading(false);
            setProductLoading(false);
        }
    }, []);

    // Funcion para crear un producto
    const createProduct = useCallback(async (data) => {
        const cleanData = {
            name: data.name,
            description: data.description,
            price: Number(data.price),
            stock: Number(data.stock),
            imageUrl: data.imageUrl,
        };

        try {
            const response = await api.post('/api/products', cleanData, {
                withCredentials: true,
            });

            if (response.status === 201) {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    response.data.product,
                ]);

                return {
                    success: true,
                    message: response.data.message,
                };
            }
        } catch (error) {
            setError(error.message || 'Error al crear el producto');
            return {
                success: false,
                message: error.message || 'Error al crear el producto',
            };
        } finally {
            setProductLoading(false);
        }
    }, []);

    const deleteProduct = useCallback(async (id) => {
        try {
            const response = await api.delete(`/api/products/${id}`, {
                withCredentials: true,
            });

            if (response.status === 200) {
                setProducts((prevProducts) =>
                    prevProducts.filter((p) => p._id !== id)
                );

                return {
                    success: true,
                    message: 'Producto eliminado correctamente',
                };
            }
        } catch (error) {
            setError(error.message || 'Error al eliminar el prducto');
            return {
                success: false,
                message: 'Error al eliminar el producto',
            };
        } finally {
            setProductsLoading(false);
        }
    }, []);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const value = {
        product,
        products,
        productsLoading,
        productLoading,
        error,
        getProducts,
        getProductById,
        updateProduct,
        createProduct,
        deleteProduct,
    };
    return <ProductContext value={value}>{children}</ProductContext>;
};
