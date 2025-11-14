import { CardProduct } from '../components/CardProduct/CardProduct';
import { useProduct } from '../hooks/useContext';

const Home = () => {
    const { products, productsLoading, error } = useProduct();

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-7 mb-2 text-purple-700 uppercase">
                Mi Ecomerce
            </h1>
            <p className="text-center mb-4">
                Compra el producto que mas te guste
            </p>
            <div className='flex flex-wrap gap-5 justify-center '>
                {productsLoading ? (
                    <div className="loading loading-spinner"></div>
                ) : error ? (
                    <p>Error al cargar los Productos</p>
                ) : (
                    products.map((product) => (
                        <CardProduct key={product._id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};
export default Home;
