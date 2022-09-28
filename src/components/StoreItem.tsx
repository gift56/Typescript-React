// type StoreItemProps = {
//   id: number;
//   name: string;
//   price: number;
//   imgUrl: string;
// };

import { formatCurrency } from "../utilities/formatCurrency";

const StoreItem = ({ item }: any) => {
  const { id, name, price, imgUrl } = item;
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
      </div>
    </div>
  );
};

export default StoreItem;
