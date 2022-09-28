type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default StoreItem;
