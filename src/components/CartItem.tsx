import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "../utilities/interface";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const [product, setProduct] = useState<Products[]>([]);

  const fetchAllProducts = async () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const truckcateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const { removeFromCart } = useShoppingCart();
  const item = product.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-f a-center">
      <img
        src={item?.image}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
        alt={item?.title}
      />
      <div className="me-auto">
        <div>
          {truckcateString(item?.title, 28)}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <p className="text-muted" style={{ fontSize: "0.85rem" }}>
          {formatCurrency(item?.price)}
        </p>
      </div>
      <p>{formatCurrency(item?.price * quantity)}</p>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id)}
        className="btn-danger"
      >
        <BsTrash />
      </Button>
    </Stack>
  );
};

export default CartItem;
