import { ButtonWrapper, ButtonAlignment } from "./style";

interface ButtonProps {
  children?: React.ReactNode;
  btnType?: string;
  align?: string;
}

export const Button = (props: ButtonProps) => {
  const { children, btnType, align } = props
  return (
    <ButtonAlignment align={align}>
      <ButtonWrapper btnType={btnType}>{children}</ButtonWrapper>
    </ButtonAlignment>
  );
}
