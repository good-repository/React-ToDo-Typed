import { Header } from "../../../components/Header";

import { Wrapper } from "./styles";

function AppLayout({ children }: any) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default AppLayout;
