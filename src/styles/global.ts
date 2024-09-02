import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-color: ${props => props.theme.colors.base.label} transparent;
    scrollbar-width: thin;

    :disabled {
      cursor: not-allowed;
      filter: brightness(0.95) saturate(0);
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme.colors.primary.default};
    }
  }
  
  body {
    width: 100vw;
    overflow-x: hidden ;
    background-color: ${props => props.theme.colors.base.background};
    -webkit-font-smoothing: antialiased;
  }

  ul, li {
    list-style: none;
  }

  input, label, button, textarea, span, p, ul, li {
    font-family: ${props => props.theme.tipography.text.font};
    font-weight: ${props => props.theme.tipography.text.weight.regular};
    font-size: ${props => props.theme.tipography.text.size.md};
    line-height: ${props => props.theme.tipography.text.lineHeight.short};
    color: ${props => props.theme.colors.base.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.tipography.title.font};
    line-height: ${props => props.theme.tipography.title.lineHeight};
  }

  h1 { 
    font-weight: ${props => props.theme.tipography.title.weight.extraBold};
    font-size: ${props => props.theme.tipography.title.size.xl};
    color: ${props => props.theme.colors.base.title};
  }

  h2 {
    font-weight: ${props => props.theme.tipography.title.weight.bold};
    font-size: ${props => props.theme.tipography.title.size.lg};
    color: ${props => props.theme.colors.base.subtitle};
  }

  h3 {
    font-weight: ${props => props.theme.tipography.title.weight.bold};
    font-size: ${props => props.theme.tipography.title.size.sm};
    color: ${props => props.theme.colors.base.subtitle};
  }

  h4 {
    font-weight: ${props => props.theme.tipography.title.weight.bold};
    font-size: ${props => props.theme.tipography.title.size.xs};
    color: ${props => props.theme.colors.base.subtitle};
  }

    
`;
