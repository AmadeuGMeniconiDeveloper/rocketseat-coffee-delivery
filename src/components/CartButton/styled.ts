import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CartButtonContainer = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme.colors.primary.light};
  color: ${props => props.theme.colors.primary.dark};

  cursor: pointer;
`;

export const Counter = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  display: grid;
  place-content: center;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary.dark};
  color: ${props => props.theme.colors.base.background};
  font-size: ${props => props.theme.tipography.text.size.xs};
  font-weight: ${props => props.theme.tipography.text.weight};
  user-select: none;
`;
