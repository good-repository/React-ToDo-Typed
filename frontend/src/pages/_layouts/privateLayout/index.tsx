import { Header } from "../../../components/Header";

import { Wrapper } from "./styles";

function DefaultLayout({ children }: any) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default DefaultLayout;
