import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: 6.5rem;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  backdrop-filter: blur(30px);
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);

  & > div {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }
`;

export const LocationBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 130%;
  background-color: ${props => props.theme.colors.secondary.light};
  color: ${props => props.theme.colors.secondary.dark};

  user-select: none;
`;
