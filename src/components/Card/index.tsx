import { useContext, useState } from "react";
import {
  CoffeeContext,
  ICoffee,
  Operation,
} from "../../contexts/CoffeeOrderProvider";

import {
  AddToOrderButton,
  AddToOrderContainer,
  BadgeList,
  CardContainer,
  CardContentContainer,
  CardFooterContainer,
  PriceContainer,
  PriceCurrency,
  PriceValue,
} from "./styled";

import { PlusSquare } from "@phosphor-icons/react";
import { NumberInput } from "../NumberInput";

interface ICardProps {
  coffee: ICoffee;
}

export default function Card({ coffee }: ICardProps) {
  const { moveCoffeeToCart } = useContext(CoffeeContext);
  const [amount, setAmount] = useState(1);

  // #FIX/CLARITY: This handle should be inside the NumberInput component or in the CoffeeContext
  function handleChangeAmount(operation: Operation) {
    if (operation === "increment") {
      if (amount < 99) {
        setAmount(prev => prev + 1);
      }
    }
    if (operation === "decrement") {
      if (amount > 1) {
        setAmount(prev => prev - 1);
      }
    }
  }

  function handleAddToCart() {
    moveCoffeeToCart(coffee, amount);
  }

  const coffeeTagList = coffee.tags.map(tag => <li key={tag}>{tag}</li>);

  return (
    <CardContainer>
      <CardContentContainer>
        <img src={coffee.image} alt={`Picture of a ${coffee.name}`} />
        <BadgeList>{coffeeTagList}</BadgeList>
        <h1>{coffee.name}</h1>
        <p>{coffee.description}</p>
      </CardContentContainer>
      <CardFooterContainer>
        <PriceContainer>
          <PriceCurrency>R$</PriceCurrency>{" "}
          <PriceValue>{coffee.price}</PriceValue>
        </PriceContainer>
        <AddToOrderContainer>
          <NumberInput
            amount={amount}
            handleChangeAmount={handleChangeAmount}
          />

          <AddToOrderButton onClick={handleAddToCart}>
            <PlusSquare size={24} weight="fill" />
          </AddToOrderButton>
        </AddToOrderContainer>
      </CardFooterContainer>
    </CardContainer>
  );
}
