import { Wrapper, Content } from "./styles";

function AuthLayout({ children }: any) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default AuthLayout;
