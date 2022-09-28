import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="grid">
        {storeItems.map((item) => (
          <div className="col" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
