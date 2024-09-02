import styled from "styled-components";

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

    user-select: none;
  }
`;
