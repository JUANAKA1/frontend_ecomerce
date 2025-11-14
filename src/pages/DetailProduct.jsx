import { useEffect } from 'react';
import { useProduct } from '../hooks/useContext';
import { useParams } from 'react-router';

export const DetailProduct = () => {
    const { product, getProductById, productLoading } = useProduct();
    const { id } = useParams();
    useEffect(() => {
        getProductById(id);
    }, [getProductById, id]);

    return (
        <>
            {productLoading ? (
                <div className="loading loading-spinner"></div>
            ) : (
                <div className="mt-6 md:flex gap-4">
                    <div className="md:w-1/2">
                        <img src={product.imageUrl} alt={product.name} />
                    </div>
                    <section className="flex flex-col gap-5 pt-2 md:pt-0 md:pl-0 md:w-1/2">
                        <h1 className="text-5xl font-bold">{product.name}</h1>
                        <p className="text-xl badge badge-warning p-4 font-bold">
                            {product.price}
                        </p>
                        <p className="text-lg">{product.description}</p>
                        <button
                            // onClick={handleAddToCart}
                            className="btn btn-success mt-2 md:mt-auto md:btn-lg"
                        >
                            Agregar al carrito
                        </button>
                    </section>
                </div>
            )}
        </>
    )
}