import StoreItem from "../components/StoreItem";
import { Products } from "../utilities/interface";

type StoreProps = {
  product: Products[];
};

const Store = ({ product }: StoreProps) => {
  return (
    <>
      <h1 className="mb-4">Store</h1>
      <div className="grid">
        {product.map((item) => (
          <div className="col" key={item.id}>
            <StoreItem item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
