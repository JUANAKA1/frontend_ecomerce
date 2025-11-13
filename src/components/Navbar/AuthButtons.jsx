import { Link } from 'react-router'

const AuthButtons = () => {
    return (
        <div className="py-5 flex justify-center items-center gap-4 flex-wrap">
            <Link to="/register" className="btn btn-neutral btn-outline ">
                Crear Cuenta
            </Link>
            <div className="hidden lg:block ">|</div>
            <Link to="/login" className="btn btn-neutral btn-outline ">
                Iniciar Sesión
            </Link>
        </div>
    )
}
export default AuthButtons
