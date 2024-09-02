import { MouseEvent } from "react";
import { NumberInputContainer } from "./styled";

import { Minus, Plus } from "@phosphor-icons/react";

interface INumberInputProps {
  handleChangeAmount: (e: MouseEvent<HTMLButtonElement>) => void;
  amount: number;
}

export function NumberInput({ amount, handleChangeAmount }: INumberInputProps) {
  return (
    <NumberInputContainer>
      <button id="decrement" onClick={handleChangeAmount}>
        <Minus size={16} />
      </button>
      <span>{amount}</span>
      <button id="increment" onClick={handleChangeAmount}>
        <Plus size={16} />
      </button>
    </NumberInputContainer>
  );
}
