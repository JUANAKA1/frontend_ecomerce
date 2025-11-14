import { useContext } from 'react';
import { UserContext } from '../context/UserContext/UserContext';
import { ProductContext } from '../context/ProductContext/ProductContext';

export const useUser = () => useContext(UserContext);

export const useProduct = () => useContext(ProductContext);
