import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding-block: 0 10rem;
`;

interface BannerProps {
  image: string;
}

export const BannerBackground = styled.div<BannerProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);
  padding-block: 16rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h1 {
    font-size: ${props => props.theme.tipography.title.size.xl};
  }

  & > p {
    font-size: ${props => props.theme.tipography.text.size.lg};
    color: ${props => props.theme.colors.base.subtitle};
  }
`;

export const TitleItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const TitleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface IconContainerProps {
  tint: keyof DefaultTheme["colors"]["tints"];
}

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 50%;

  background-color: ${props => props.theme.colors.tints[props.tint]};
  color: ${props => props.theme.colors.base.background};
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    margin-bottom: 3.375rem;
    font-size: ${props => props.theme.tipography.title.size.lg};
  }
`;

export const CoffeeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
