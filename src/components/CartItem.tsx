import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { BsTrash } from "react-icons/bs";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-f a-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </p>
      </div>
      <p>{formatCurrency(item.price * quantity)}</p>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
        className="btn-danger"
      >
        <BsTrash />
      </Button>
    </Stack>
  );
};

export default CartItem;
