import GlobalStyle from "./styles/global";

import Routes from "./routes/index";
import { AuthProvider } from "./store/context/auth";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
