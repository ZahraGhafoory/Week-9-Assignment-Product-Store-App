import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  selectCartTotalPrice,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div>
      <h1>Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => dispatch(increaseQty(item.id))}>
                +
              </button>

              <button onClick={() => dispatch(decreaseQty(item.id))}>
                -
              </button>

              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;