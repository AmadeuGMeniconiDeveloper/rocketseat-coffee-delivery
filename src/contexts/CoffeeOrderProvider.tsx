import { createContext, ReactNode, useEffect, useState } from "react";

import coffeeTraditional from "../assets/coffee-traditional.png";
import coffeeAmerican from "../assets/coffee-american.png";
import coffeeCreamy from "../assets/coffee-creamy.png";
import coffeeIce from "../assets/coffee-ice.png";
import coffeeMilk from "../assets/coffee-milk.png";
import coffeeLatte from "../assets/coffee-latte.png";
import coffeeCappuccino from "../assets/coffee-capuccino.png";
import coffeeMacchiato from "../assets/coffee-macchiato.png";
import coffeeMocaccino from "../assets/coffee-mocaccino.png";
import coffeeChocolate from "../assets/coffee-chocolate.png";
import coffeeCuban from "../assets/coffee-cuban.png";
import coffeeHawaiian from "../assets/coffee-hawaiian.png";
import coffeeIrish from "../assets/coffee-irish.png";
import coffeeArabic from "../assets/coffee-arabic.png";

const CoffeesData: ICoffee[] = [
  {
    id: 1,
    name: "Traditional Expresso",
    description:
      "The traditional origin of coffee made with hot water and sugar ",
    price: "2.50",
    image: coffeeTraditional,
    tags: ["traditional"],
  },
  {
    id: 2,
    name: "American Expresso",
    description: "Diluted expresso with hot water",
    price: "2.30",
    image: coffeeAmerican,
    tags: ["traditional"],
  },
  {
    id: 3,
    name: "Creamy Expresso",
    description: "Expresso coffee with creamy foam",
    price: "3.00",
    image: coffeeCreamy,
    tags: ["traditional"],
  },
  {
    id: 4,
    name: "Ice Expresso",
    description: "Expresso coffee with ice cubes",
    price: "3.20",
    image: coffeeIce,
    tags: ["traditional", "cold"],
  },
  {
    id: 5,
    name: "Café with Milk",
    description: "Half dose of coffee with milk",
    price: "2.20",
    image: coffeeMilk,
    tags: ["traditional", "milk"],
  },
  {
    id: 6,
    name: "Latte",
    description: "Whole bean coffee with steamed milk and foam",
    price: "2.90",
    image: coffeeLatte,
    tags: ["traditional", "milk"],
  },
  {
    id: 7,
    name: "Capuccino",
    description: "Expresso coffee with cinnamon and milk foam",
    price: "4.20",
    image: coffeeCappuccino,
    tags: ["traditional", "milk"],
  },
  {
    id: 8,
    name: "Macchiato",
    description: "Expresso coffee with hot water and milk foam",
    price: "4.20",
    image: coffeeMacchiato,
    tags: ["traditional", "milk"],
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Expresso coffee with milk and chocolate",
    price: "4.20",
    image: coffeeMocaccino,
    tags: ["traditional", "milk"],
  },
  {
    id: 10,
    name: "Hot Chocolate",
    description: "Drink with hot milk and chocolate, no caffeine",
    price: "3.50",
    image: coffeeChocolate,
    tags: ["special", "milk"],
  },
  {
    id: 11,
    name: "Cuban",
    description:
      "Cold coffee with chocolate, with rum, foamy milk and ice cubes",
    price: "5.90",
    image: coffeeCuban,
    tags: ["special", "alcoholic", "cold"],
  },
  {
    id: 12,
    name: "Hawaiian",
    description: "Drink made with hot water and coconut milk",
    price: "5.90",
    image: coffeeHawaiian,
    tags: ["special"],
  },
  {
    id: 13,
    name: "Arabic",
    description: "Drink made with hot water, arabic coffee grains and spices",
    price: "6.70",
    image: coffeeArabic,
    tags: ["special"],
  },
  {
    id: 14,
    name: "Irish",
    description: "Drink made with hot water, Irish wiskey, sugar and chantilly",
    price: "7.10",
    image: coffeeIrish,
    tags: ["special", "alcoholic"],
  },
];

export type Operation = "increment" | "decrement";
export type Payment = "credit card" | "debit card" | "cash";
export type Tag = "traditional" | "special" | "alcoholic" | "cold" | "milk";

export interface ICoffee {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: Tag[];
}

export interface ICartItem {
  coffee: ICoffee;
  amount: number;
}

export interface ICoffeeOrder {
  cart: ICartItem[];
  address: {
    zipcode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  payment?: Payment;
  subTotal: number;
  deliveryFee: number;
  total: number;
}

interface ICoffeeContext {
  coffees: ICoffee[];
  order: ICoffeeOrder;
  moveCoffeeToCart: (coffee: ICoffee, amount?: number) => void;
  removeCoffeeFromCart: (coffee: ICoffee) => void;
  updateCoffeeAmountInCart: (
    coffee: ICoffee,
    operation: Operation,
    amount?: number
  ) => void;
  updateOrderAddress: ({
    key,
    value,
  }: {
    key: keyof ICoffeeOrder["address"];
    value: string;
  }) => void;
  updateOrderPaymentMethod: (payment: Payment) => void;
  submitOrder: (orderData: ICoffeeOrder) => void;
}

export const CoffeeContext = createContext({} as ICoffeeContext);

interface ICoffeeOrderProviderProps {
  children: ReactNode;
}

export function CoffeeOrderProvider({ children }: ICoffeeOrderProviderProps) {
  const coffees = CoffeesData;
  const [order, setOrder] = useState<ICoffeeOrder>({
    cart: [],
    address: {
      zipcode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
    subTotal: 0,
    deliveryFee: 3.5,
    total: 0,
  } as ICoffeeOrder);

  function moveCoffeeToCart(coffee: ICoffee, amount = 1) {
    if (order.cart.find(item => item.coffee.id === coffee.id)) {
      const updatedCart = order.cart.map(item => {
        if (item.coffee.id === coffee.id) {
          if (item.amount + amount > 99) {
            return { coffee, amount: 99 };
          }

          return { coffee, amount: item.amount + amount };
        }

        return item;
      });

      setOrder(prev => ({ ...prev, cart: updatedCart }));
    } else {
      setOrder(prev => ({ ...prev, cart: [...prev.cart, { coffee, amount }] }));
    }
  }

  function removeCoffeeFromCart(coffee: ICoffee) {
    const updatedCart = order.cart.filter(item => item.coffee.id !== coffee.id);

    setOrder(prev => ({ ...prev, cart: updatedCart }));
  }

  function updateCoffeeAmountInCart(
    coffee: ICoffee,
    operation: Operation,
    amount = 1
  ) {
    const updatedCart = order.cart.map(item => {
      if (item.coffee.id === coffee.id) {
        if (operation === "increment") {
          return { coffee, amount: item.amount + amount };
        }

        if (operation === "decrement") {
          return { coffee, amount: item.amount - amount };
        }
      }

      return item;
    });

    setOrder(prev => ({ ...prev, cart: updatedCart }));
  }

  function updateOrderPaymentMethod(payment: Payment) {
    setOrder(prev => ({ ...prev, payment }));
  }

  function updateOrderAddress({
    key,
    value,
  }: {
    key: keyof ICoffeeOrder["address"];
    value: string;
  }) {
    const updatedAddress = {
      ...order.address,
      [key]: value,
    };

    setOrder(prev => ({
      ...prev,
      address: updatedAddress,
    }));
  }

  function updateOrderTotal() {
    const subTotal = order.cart.reduce((total, item) => {
      return total + Number(item.coffee.price) * item.amount;
    }, 0);

    const total = subTotal + order.deliveryFee;

    setOrder(prev => ({ ...prev, subTotal, total }));
  }

  function submitOrder(orderData: ICoffeeOrder) {
    localStorage.setItem(
      "@coffee-delivery:confirmed-order",
      JSON.stringify(orderData)
    );

    setOrder({
      cart: [],
      address: {
        zipcode: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
      },
      subTotal: 0,
      deliveryFee: 3.5,
      total: 0,
    });
  }

  useEffect(() => {
    updateOrderTotal();
  }, [order.cart]);

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        order,
        moveCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeAmountInCart,
        updateOrderAddress,
        updateOrderPaymentMethod,
        submitOrder,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
