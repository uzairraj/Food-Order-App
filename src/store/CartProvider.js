//manange cart context data and provide to all component


import CartContext from './cart-context';
const CartProvider = props => {

  const addItemToCartHandler = item => {};
  const removeItemFromCartHandler = id => {};

  
  const cartContext = {
    items:[],
    totalAmount:0,
    additem:addItemToCartHandler ,
    removeItem:removeItemFromCartHandler,

  };  

  return <CartContext.Provider value={cartContext}>

        {props.children}
  </CartContext.Provider>

};
export default CartProvider;