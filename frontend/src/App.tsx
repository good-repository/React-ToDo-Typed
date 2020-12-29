import GlobalStyle from "./styles/global";

import Routes from "./routes/index";
import { AuthProvider } from "./store/context/auth";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
