import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
`;

export const CheckoutFormContainer = styled.div`
  max-width: 640px;
  min-width: 500px;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    font-size: ${props => props.theme.tipography.title.size.xs};
  }
`;

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.4rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.base.card};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.15);
`;

export const FormSectionTitle = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;

  & > div {
    display: flex;
    flex-direction: column;

    & > h3 {
      font-family: ${props => props.theme.tipography.text.font};
      font-weight: ${props => props.theme.tipography.text.weight.regular};
      font-size: ${props => props.theme.tipography.text.size.md};
      line-height: ${props => props.theme.tipography.text.lineHeight.short};
      color: ${props => props.theme.colors.base.text};
    }

    p {
      font-size: ${props => props.theme.tipography.text.size.sm};
      line-height: ${props => props.theme.tipography.text.lineHeight.tall};
    }
  }
`;

export const FormAddressSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > input {
    width: 100%;
    min-width: 200px;
    height: 2.5rem;
    padding: 0.75rem;
    border-radius: 6px;
    border: none;
    background-color: ${props => props.theme.colors.base.input};
    font-size: ${props => props.theme.tipography.text.size.sm};
    line-height: ${props => props.theme.tipography.text.lineHeight.tall};
  }

  & > #zipcode {
    flex-basis: 200px;
  }

  & > #street {
    width: 100%;
  }

  & > #number {
    flex-basis: 200px;
  }

  & > #door {
    flex-basis: calc(100% - 200px - 1rem);
  }

  & > #neighborhood {
    flex-basis: 200px;
  }

  & > #city {
    flex: 6;
  }

  & > #state {
    flex: 1;
    min-width: 42px;
  }
`;

export const FormPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.4rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.base.card};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.15);
`;

export const FormPaymentSection = styled.fieldset`
  display: flex;
  gap: 1rem;
  border: none;
`;

interface IFormPaymentInputContainerProps {
  selected: boolean;
}

export const FormPaymentInputContainer = styled.label<IFormPaymentInputContainerProps>`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  height: 3.1rem;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 6px;
  outline: ${props =>
    props.selected
      ? `1px solid ${props.theme.colors.secondary.default}`
      : "none"};
  background-color: ${props =>
    props.selected
      ? props.theme.colors.secondary.light
      : props.theme.colors.base.button};
  font-size: ${props => props.theme.tipography.text.size.xs};
  line-height: 100%;

  user-select: none;

  & > input[type="radio"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;

    &:not(:disabled) {
      cursor: pointer;
    }
  }
`;

export const OrderContainer = styled.div`
  max-width: 448px;
  min-width: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    font-size: ${props => props.theme.tipography.title.size.xs};
  }
`;

export const Order = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${props => props.theme.colors.base.card};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.15);
`;

export const CartItemsList = styled.ul`
  height: 300px;
  max-height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const CartEmptyMessage = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px dashed ${props => props.theme.colors.base.label};
  font-size: ${props => props.theme.tipography.text.size.sm};
  line-height: ${props => props.theme.tipography.text.lineHeight.tall};
  color: ${props => props.theme.colors.base.label};
  font-weight: ${props => props.theme.tipography.text.weight.bold};
`;

export const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
  padding-inline: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.base.button};

  & > div {
    display: flex;
    gap: 1rem;

    & > img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      & > p {
        font-size: ${props => props.theme.tipography.text.size.md};
        line-height: ${props => props.theme.tipography.text.lineHeight.short};
        color: ${props => props.theme.colors.base.text};
      }
    }
  }

  & > span {
    font-size: ${props => props.theme.tipography.text.size.md};
    font-weight: ${props => props.theme.tipography.text.weight.bold};
    line-height: ${props => props.theme.tipography.text.lineHeight.short};
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.base.button};
  color: ${props => props.theme.colors.tints.red};
  cursor: pointer;

  &:active {
    background-color: ${props => props.theme.colors.base.hover};
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.725rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      font-size: ${props => props.theme.tipography.text.size.sm};

      & > strong {
        font-size: ${props => props.theme.tipography.text.size.lg};
        font-weight: ${props => props.theme.tipography.text.weight.bold};
        line-height: ${props => props.theme.tipography.text.lineHeight.tall};
      }
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.725rem;
  border-radius: 6px;
  border: none;
  margin-top: 0.5rem;
  background-color: ${props => props.theme.colors.primary.default};
  color: ${props => props.theme.colors.base.background};
  font-weight: ${props => props.theme.tipography.text.weight.bold};
  font-size: ${props => props.theme.tipography.text.size.sm};

  cursor: pointer;
`;
