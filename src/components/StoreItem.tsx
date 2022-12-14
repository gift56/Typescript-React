import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

const StoreItem = ({ item }: any) => {
  const { id, title, price, image } = item;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  let quantity = getItemQuantity(id);

  const truckcateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="body">
        <div className="title">
          <h4>{truckcateString(title, 40)}</h4>
          <span>{formatCurrency(price)}</span>
        </div>
        <div className="w-100">
          {quantity === 0 ? (
            <button
              className="btn w-100 myBtn"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="addingCart">
              <div className="buttons center">
                <button
                  className="btn myBtn"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <h3>
                  <span>{quantity}</span> in Cart
                </h3>
                <button
                  className="btn myBtn"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button className="btn remove" onClick={() => removeFromCart(id)}>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
