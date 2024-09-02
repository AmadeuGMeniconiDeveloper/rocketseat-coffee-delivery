import { Operation } from "../../contexts/CoffeeOrderProvider";

import { NumberInputContainer } from "./styled";

import { Minus, Plus } from "@phosphor-icons/react";

interface INumberInputProps {
  handleChangeAmount: (operation: Operation) => void;
  amount: number;
}

export function NumberInput({ amount, handleChangeAmount }: INumberInputProps) {
  return (
    <NumberInputContainer>
      <button id="decrement" onClick={() => handleChangeAmount("decrement")}>
        <Minus size={16} />
      </button>
      <span>{amount}</span>
      <button id="increment" onClick={() => handleChangeAmount("increment")}>
        <Plus size={16} />
      </button>
    </NumberInputContainer>
  );
}
