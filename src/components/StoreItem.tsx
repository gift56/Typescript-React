import { formatCurrency } from "../utilities/formatCurrency";

const StoreItem = ({ item }: any) => {
  const { id, name, price, imgUrl } = item;
  let quantity = 0;
  return (
    <div className="card">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="body">
        <div className="title">
          <h4>{name}</h4>
          <span>{formatCurrency(price)}</span>
        </div>
        <div className="w-100">
          {quantity === 0 ? (
            <button className="btn w-100">+ Add To Cart</button>
          ) : (
            <div className="addingCart">
              <div className="buttons center">
                <button className="btn">-</button>
                <h3>
                  <span>{quantity}</span> in Cart
                </h3>
                <button className="btn">+</button>
              </div>
              <button className="btn remove">Remove</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
