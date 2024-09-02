import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  background-color: ${props => props.theme.colors.base.card};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.15);
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    margin-top: -2.5rem;
    user-select: none;
  }

  & > h1 {
    font-size: ${props => props.theme.tipography.text.size.lg};
  }

  & > p {
    text-align: center;
    font-size: ${props => props.theme.tipography.text.size.sm};
    color: ${props => props.theme.colors.base.label};
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`;

export const BadgeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem;

  & > li {
    padding: 0.25rem 0.5rem;
    border-radius: 0.8rem;
    background-color: ${props => props.theme.colors.primary.light};
    color: ${props => props.theme.colors.primary.dark};
    font-weight: ${props => props.theme.tipography.text.weight.bold};
    font-size: ${props => props.theme.tipography.text.size.xs};
    line-height: 100%;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.1);
    user-select: none;
  }
`;

export const CardFooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.span`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`;

export const PriceCurrency = styled.span`
  font-size: ${props => props.theme.tipography.text.size.sm};
  font-weight: ${props => props.theme.tipography.text.weight.bold};
  user-select: none;
`;

export const PriceValue = styled.span`
  font-family: ${props => props.theme.tipography.title.font};
  color: ${props => props.theme.colors.base.text};
  font-weight: ${props => props.theme.tipography.title.weight.extraBold};
  font-size: ${props => props.theme.tipography.title.size.md};
  user-select: none;
`;

export const AddToOrderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NumberInputContainer = styled.div`
  height: 2.25rem;
  width: 5.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.base.button};

  button {
    display: flex;
    align-items: center;

    border: none;

    background-color: transparent;
    color: ${props => props.theme.colors.secondary.dark};

    cursor: pointer;
  }

  span {
    text-align: center;
    width: 1.2rem;
  }
`;

export const AddToOrderButton = styled.button`
  height: 2.25rem;
  width: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme.colors.secondary.default};
  color: ${props => props.theme.colors.base.contrast};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.secondary.default};
    box-shadow: 1px 1px 3px ${props => props.theme.colors.base.label};
  }

  &:active {
    background-color: ${props => props.theme.colors.secondary.dark};
  }
`;
