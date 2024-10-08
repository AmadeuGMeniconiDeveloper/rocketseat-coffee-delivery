import Card from "../../components/Card";

import banner from "../../assets/banner-bg.png";
import bannerImg from "../../assets/banner-img.png";

import {
  BannerBackground,
  BannerContainer,
  CoffeeList,
  CoffeeListContainer,
  HomeContainer,
  Title,
  TitleContainer,
  TitleItem,
  IconContainer,
  TitleItemsContainer,
} from "./styled";
import { Clock, Coffee, Package, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeOrderProvider";

export function Home() {
  const { coffees } = useContext(CoffeeContext);

  const coffeeListItems = coffees.map(coffee => (
    <li key={coffee.id}>
      <Card key={coffee.id} coffee={coffee} />
    </li>
  ));

  return (
    <HomeContainer>
      <BannerBackground image={banner} />
      <BannerContainer>
        <TitleContainer>
          <Title>
            <h1>Find the perfect coffee for you any time of the day</h1>
            <p>
              With <em>Coffee Delivery</em> you receive your coffee whenever and
              wherever you are
            </p>
          </Title>
          <TitleItemsContainer>
            <TitleItem>
              <IconContainer tint="orange">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              <p>Safe and secure payments</p>
            </TitleItem>
            <TitleItem>
              <IconContainer tint="gray">
                <Package size={16} weight="fill" />
              </IconContainer>
              <p>Steadily packaged with care</p>
            </TitleItem>
            <TitleItem>
              <IconContainer tint="yellow">
                <Clock size={16} weight="fill" />
              </IconContainer>
              <p>Fast delivery and tracking</p>
            </TitleItem>
            <TitleItem>
              <IconContainer tint="purple">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              <p>Your coffee arrives fresh</p>
            </TitleItem>
          </TitleItemsContainer>
        </TitleContainer>
        <img src={bannerImg} alt="" />
      </BannerContainer>
      <CoffeeListContainer>
        <h1>Our Coffees</h1>
        <CoffeeList>{coffeeListItems}</CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
