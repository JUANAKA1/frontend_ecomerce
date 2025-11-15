import { Link } from 'react-router'
import { useProduct } from '../../../hooks/useContext'
import { TableProducts } from './TableProducts'


export const TableProductDashboard = () => {
    const { products, producstLoding } = useProduct()

    return (
        <>
            <div className="flex items-center gap-4 justify-center my-10">
                <h1>Administrar los Productos</h1>
                <Link
                    to="/admin/dashboard/products/createProduct"
                    className="btn btn-primary"
                >
                    Crear Producto
                </Link>
            </div>
            <div className="overflow-x-auto">
                {producstLoding ? (
                    <div className="loading loading-spinner"></div>
                ) : (
                    <TableProducts products={products} />
                )}
            </div>
        </>
    )
}
