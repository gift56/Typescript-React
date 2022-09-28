import { formatCurrency } from "../utilities/formatCurrency";

const StoreItem = ({ item }: any) => {
  const { id, name, price, imgUrl } = item;
  const quantity = 0;
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
        <div className="btn">
          {quantity == 0 ? (
            <button className="btn">+ Add To Cart</button>
          ) : (
            <div className="addingCart">
                
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
