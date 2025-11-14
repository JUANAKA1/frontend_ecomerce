import { Link } from 'react-router';
// import { useUser } from '../../hooks/useContext';
import { FaShoppingCart } from 'react-icons/fa';

export const CardProduct = ({
    product: { _id, description, imageUrl, name, price, stock },
}) => {
    // const { isAuthenticted } = useUser();
    return (
        <div className="card bg-base-100 w-80 lg:w-[40%] shadow-lg ">
            <fugure>
                <img
                    className="aspect-9/9 object-cover"
                    src={imageUrl}
                    alt={name}
                />
            </fugure>
            <div className="card-body">
                <h2 className="cart-title">{name}</h2>
                <div className="badge badge-warning">{price}</div>
                <p>{description}</p>
                <div className="card-actions justify-between mt-4">
                    <Link
                        to={`/detailProduct/${_id}`}
                        className=" btn btn-info btn-sm "
                    >
                        Ver Detalles
                    </Link>
                    <button
                        disabled={stock === 0}
                        className="btn btn-success btn-sm md:btn-md"
                    >
                        <FaShoppingCart size={16} />
                        {stock === 0 ? 'Sin unidades' : 'Agregar'}
                    </button>
                </div>
            </div>
        </div>
    );
};
