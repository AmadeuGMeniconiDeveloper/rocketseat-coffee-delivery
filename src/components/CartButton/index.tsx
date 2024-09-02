import { ShoppingCart } from "@phosphor-icons/react";
import { CartButtonContainer, Counter } from "./styled";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeOrderProvider";

export default function CartButton() {
  const { order } = useContext(CoffeeContext);
  return (
    <CartButtonContainer to="/checkout">
      {order.cart.length > 0 && <Counter>{order.cart.length}</Counter>}
      <ShoppingCart size={20} weight="fill" />
    </CartButtonContainer>
  );
}
