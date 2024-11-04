// import { useContext, useEffect } from 'react';

// import { CartContext } from '../../contexts/cart.context';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
