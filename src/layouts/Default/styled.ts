import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OutletContainer = styled.div`
  max-width: 1440px;
  height: 100%;
  min-height: calc(100vh - 6.5rem);
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  padding-inline: 10rem;
`;
