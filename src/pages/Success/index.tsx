import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";
import {
  IconContainer,
  SuccessContainer,
  SuccessContent,
  SuccessContentContainer,
  SuccessTitleContainer,
} from "./styled";
import image from "../../assets/Illustration.svg";

export function Success() {
  const order = JSON.parse(
    localStorage.getItem("@coffee-delivery:confirmed-order")!
  );

  return (
    <>
      {order && (
        <SuccessContainer>
          <SuccessTitleContainer>
            <h1>Success! Order confirmed</h1>
            <p>Your order was successfully completed.</p>
          </SuccessTitleContainer>
          <SuccessContentContainer>
            <SuccessContent>
              <div>
                <IconContainer tint="purple">
                  <MapPin size={20} weight="fill" />
                </IconContainer>
                <span>
                  <p>
                    Delivered to{" "}
                    <strong>
                      {order.address.street}, {order.address.number}
                    </strong>
                  </p>
                  {order.address.neighborhood} - {order.address.city},{" "}
                  {order.address.state}
                </span>
              </div>
              <div>
                <IconContainer tint="yellow">
                  <Clock size={20} weight="fill" />
                </IconContainer>
                <span>
                  <p>Delivery due to </p>
                  <p>
                    <strong>20 min</strong>
                  </p>
                </span>
              </div>
              <div>
                <IconContainer tint="orange">
                  <CurrencyDollar size={20} weight="fill" />
                </IconContainer>
                <span>
                  <p>Payment upon delivery</p>
                  <p>
                    <strong>{String(order.payment).toUpperCase()}</strong>
                  </p>
                </span>
              </div>
            </SuccessContent>
            <img src={image} alt="image" />
          </SuccessContentContainer>
        </SuccessContainer>
      )}
    </>
  );
}
