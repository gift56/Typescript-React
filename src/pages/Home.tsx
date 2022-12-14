import { formatCurrency } from "../utilities/formatCurrency";
import { Products } from "../utilities/interface";
import { Link } from "react-router-dom";

type HomeProps = {
  product: Products[];
};

const truckcateString = (str: string, num: number) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

const Home = ({ product }: HomeProps) => {
  return (
    <div>
      <div className="grid">
        {product.map((item: any) => (
          <div className="card" key={item.id}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="body">
              <div className="title">
                <h4>{truckcateString(item.title, 30)}</h4>
                <span>{formatCurrency(item.price)}</span>
              </div>
              <p>{truckcateString(item.description, 150)}</p>
            </div>
            <Link to="/store" className="w-100">
              <button className="btn myBtn w-100">Go to store</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
