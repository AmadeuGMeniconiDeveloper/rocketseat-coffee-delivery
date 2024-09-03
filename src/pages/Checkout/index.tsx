import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { NumberInput } from "../../components/NumberInput";

import {
  CoffeeContext,
  ICartItem,
  Operation,
  Payment,
} from "../../contexts/CoffeeOrderProvider";

import {
  CartEmptyMessage,
  CartItemContainer,
  CartItemsList,
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContainer,
  FormAddressContainer,
  FormAddressSection,
  FormPaymentContainer,
  FormPaymentInputContainer,
  FormPaymentSection,
  FormSectionTitle,
  Order,
  OrderContainer,
  RemoveButton,
  SubmitButton,
  TotalContainer,
} from "./styled";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "@phosphor-icons/react";

export function Checkout() {
  const {
    order,
    updateCoffeeAmountInCart,
    removeCoffeeFromCart,
    updateOrderPaymentMethod,
    updateOrderAddress,
    submitOrder,
  } = useContext(CoffeeContext);

  const navigate = useNavigate();

  function handleChangeCartItemAmount(item: ICartItem, operation: Operation) {
    if (item.amount === 1 && operation === "decrement") {
      return;
    }
    if (item.amount === 99 && operation === "increment") {
      return;
    }

    updateCoffeeAmountInCart(item.coffee, operation);
  }

  function handleRemoveCartItem(item: ICartItem) {
    removeCoffeeFromCart(item.coffee);
  }

  function handleSelectPayment(payment: Payment) {
    updateOrderPaymentMethod(payment);
  }

  function handleSubmitOrder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitOrder(order);

    navigate("/success", { replace: true });
  }

  const cartItemList = order.cart.map(item => (
    <CartItemContainer key={item.coffee.id}>
      <div>
        <img src={item.coffee.image} alt={`Picture of ${item.coffee.name}`} />
        <div>
          <p>{item.coffee.name}</p>
          <div>
            <NumberInput
              amount={item.amount}
              handleChangeAmount={operation =>
                handleChangeCartItemAmount(item, operation)
              }
            />

            <RemoveButton onClick={() => handleRemoveCartItem(item)}>
              <Trash size={20} />
            </RemoveButton>
          </div>
        </div>
      </div>

      <span>
        {"$ "}
        {(Number(item.coffee.price) * item.amount).toFixed(2)}
      </span>
    </CartItemContainer>
  ));

  const isDiabled = order.cart.length === 0;

  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <h2>Fill in your information</h2>
        <CheckoutForm id="checkout" onSubmit={handleSubmitOrder}>
          <FormAddressContainer>
            <FormSectionTitle>
              <MapPin size={20} weight="regular" color="#C47F17" />
              <div>
                <h3>Delivery Address</h3>
                <p>Fill in the address information to receive your order</p>
              </div>
            </FormSectionTitle>
            <FormAddressSection>
              <input
                id="zipcode"
                value={order.address.zipcode}
                onChange={e =>
                  updateOrderAddress({ key: "zipcode", value: e.target.value })
                }
                pattern="^\d{4}(-\d{3})?$"
                placeholder="Zipcode"
                disabled={isDiabled}
                required
              />
              <input
                id="street"
                value={order.address.street}
                onChange={e =>
                  updateOrderAddress({ key: "street", value: e.target.value })
                }
                placeholder="Street"
                disabled={isDiabled}
                required
              />
              <input
                id="number"
                value={order.address.number}
                onChange={e =>
                  updateOrderAddress({ key: "number", value: e.target.value })
                }
                pattern="^[0-9]*$"
                placeholder="Number"
                disabled={isDiabled}
                required
              />
              <input
                id="door"
                value={order.address.complement}
                onChange={e =>
                  updateOrderAddress({
                    key: "complement",
                    value: e.target.value,
                  })
                }
                pattern="^[0-9]*$"
                placeholder="Door"
                disabled={isDiabled}
                required
              />
              <input
                id="neighborhood"
                value={order.address.neighborhood}
                onChange={e =>
                  updateOrderAddress({
                    key: "neighborhood",
                    value: e.target.value,
                  })
                }
                placeholder="Neighborhood"
                disabled={isDiabled}
                required
              />
              <input
                id="city"
                value={order.address.city}
                onChange={e =>
                  updateOrderAddress({ key: "city", value: e.target.value })
                }
                placeholder="City"
                disabled={isDiabled}
                required
              />
              <input
                id="state"
                value={order.address.state}
                onChange={e =>
                  updateOrderAddress({ key: "state", value: e.target.value })
                }
                maxLength={2}
                placeholder="ST"
                disabled={isDiabled}
                required
              />
            </FormAddressSection>
          </FormAddressContainer>
          <FormPaymentContainer>
            <FormSectionTitle>
              <CurrencyDollar size={20} weight="regular" color="#8047F8" />
              <div>
                <h3>Payment</h3>
                <p>Payment is fulfilled upon delivery</p>
              </div>
            </FormSectionTitle>
            <FormPaymentSection id="payment" disabled={isDiabled}>
              <FormPaymentInputContainer
                htmlFor="credit"
                selected={order.payment === Payment.CREDIT}
              >
                <CreditCard size={16} weight="regular" color="#8047F8" />
                CREDIT CARD
                <input
                  id="credit"
                  value={Payment.CREDIT}
                  name="payment"
                  type="radio"
                  checked={order.payment === Payment.CREDIT}
                  onChange={e => handleSelectPayment(e.target.value as Payment)}
                  disabled={isDiabled}
                  required
                />
              </FormPaymentInputContainer>
              <FormPaymentInputContainer
                htmlFor="debit"
                selected={order.payment === Payment.DEBIT}
              >
                <input
                  id="debit"
                  value={Payment.DEBIT}
                  name="payment"
                  type="radio"
                  checked={order.payment === Payment.DEBIT}
                  onChange={e => handleSelectPayment(e.target.value as Payment)}
                  disabled={isDiabled}
                  required
                />
                <Bank size={16} weight="regular" color="#8047F8" />
                DEBIT CARD
              </FormPaymentInputContainer>
              <FormPaymentInputContainer
                htmlFor="cash"
                selected={order.payment === Payment.CASH}
              >
                <input
                  id="cash"
                  value={Payment.CASH}
                  name="payment"
                  type="radio"
                  checked={order.payment === Payment.CASH}
                  onChange={e => handleSelectPayment(e.target.value as Payment)}
                  disabled={isDiabled}
                  required
                />
                <Money size={16} weight="regular" color="#8047F8" />
                CASH
              </FormPaymentInputContainer>
            </FormPaymentSection>
          </FormPaymentContainer>
        </CheckoutForm>
      </CheckoutFormContainer>
      <OrderContainer>
        <h2>Your Cart</h2>
        <Order>
          <CartItemsList>
            {cartItemList.length ? (
              cartItemList
            ) : (
              <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
            )}
          </CartItemsList>
          <TotalContainer>
            <div>
              <span>Subtotal</span>
              <span>$ {order.subTotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>$ {order.deliveryFee.toFixed(2)}</span>
            </div>
            <div>
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>$ {order.total.toFixed(2)}</strong>
              </span>
            </div>
            <SubmitButton type="submit" disabled={isDiabled} form="checkout">
              CONFIRM ORDER
            </SubmitButton>
          </TotalContainer>
        </Order>
      </OrderContainer>
    </CheckoutContainer>
  );
}
