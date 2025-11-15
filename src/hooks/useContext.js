import { useContext } from 'react';
import { UserContext } from '../context/UserContext/UserContext';
import { ProductContext } from '../context/ProductContext/ProductContext';
import { CartContext } from '../context/CartContext/CartContext';

export const useUser = () => useContext(UserContext);

export const useProduct = () => useContext(ProductContext);

export const useCart = () => useContext(CartContext);
