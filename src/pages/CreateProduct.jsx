import { CreateProductForm } from '../components/AdminDasboard/CreateProductForm/CreateProductForm';

export const CreateProduct = () => {
    return (
        <div>
            <h1 className="text-3xl font-bol text-center my-10">
                Crear Producto
            </h1>
            <CreateProductForm />
        </div>
    );
};
