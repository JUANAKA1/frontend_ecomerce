import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { loginService } from '../../services/authServices';
import { useUser } from '../../hooks/useContext';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router';

const LoginForm = () => {
    const { setUserInfo, userInfo } = useUser();
    const [showPassword, setShowPassword] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = async (data) => {
        const result = await loginService(
            data,
            reset,
            setRedirect,
            setUserInfo
        );
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    if (redirect && userInfo.isAdmin) {
        // return <Navigate to="/" />;
    }

    if (redirect && !userInfo.isAdmin) {
        return <Navigate to="/" />;
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col gap-4 lg:gap-6 max-w-[500px] mx-auto"
        >
            {/* EMAIL */}
            <div>
                <input
                    className={`p-2 outline-2 rounded-lg focus:outline-cyan-800 w-full ${
                        errors.email
                            ? 'border-red-500 outline-red-500 focus:outline-red-500'
                            : ''
                    }`}
                    autoComplete="email"
                    type="text"
                    placeholder="tucorreo@gmail.com"
                    {...register('email', {
                        required: 'El correo es requerido',
                        pattern: {
                            value: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/,
                            message: 'Correo electrónico inválido',
                        },
                        minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                        maxLength: {
                            value: 100,
                            message: 'Máximo 100 caracteres',
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-2 ml-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
                <input
                    className={`p-2 outline-2 rounded-lg focus:outline-cyan-800 w-full ${
                        errors.password
                            ? 'border-red-500 outline-red-500 focus:outline-red-500'
                            : ''
                    }`}
                    {...register('password', {
                        required: 'La contraseña es requerida',
                        minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                        maxLength: {
                            value: 100,
                            message: 'Máximo 100 caracteres',
                        },
                    })}
                    autoComplete="new-password"
                    placeholder="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                />
                <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    type="button"
                    aria-label={
                        showPassword
                            ? 'Ocultar contraseña'
                            : 'Mostrar contraseña'
                    }
                    className="absolute right-4 top-5 -translate-y-1/2 text-gray-600 cursor-pointer"
                >
                    {showPassword ? (
                        <FaEyeSlash size={22} />
                    ) : (
                        <FaEye size={22} />
                    )}
                </button>

                {errors.password && (
                    <p className="text-red-500 text-sm mt-2 ml-1">
                        {errors.password.message}
                    </p>
                )}
            </div>

            {/* BUTTON */}
            <button className="btn btn-primary mt-2">Iniciar Sesión</button>
        </form>
    );
};

export default LoginForm;
