import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export const SuccessContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;

export const SuccessTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > h1 {
    font-size: ${props => props.theme.tipography.title.size.md};
    color: ${props => props.theme.colors.primary.dark};
  }

  & > p {
    font-size: ${props => props.theme.tipography.text.size.sm};
    line-height: ${props => props.theme.tipography.text.lineHeight.short};
  }
`;

export const SuccessContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 2rem;
`;

export const SuccessContent = styled.div`
  flex: 1;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  background-color: ${props => props.theme.colors.base.card};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.15);

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
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
