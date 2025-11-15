import { useParams } from 'react-router';
import { useProduct } from '../hooks/useContext';
import { useEffect } from 'react';
import { UpdateProductForm } from '../components/AdminDasboard/UpdateProductForm/UpdateProductForm';

export const UpdateProduct = () => {
    const { id } = useParams();
    const { getProductById, product, productLoading } = useProduct();

    useEffect(() => {
        getProductById(id);
    }, [id, getProductById]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">
                Actualizar producto
            </h1>
            {productLoading ? (
                <div className="loading loading-spinner"></div>
            ) : (
                <UpdateProductForm product={product} />
            )}
        </div>
    );
};
