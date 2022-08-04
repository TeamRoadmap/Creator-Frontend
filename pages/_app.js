import "../styles/globals.css";
import { CSSReset } from "@chakra-ui/react";
// 1. Import the extendTheme function
import theme from "../lib/theme";
import { Chakra } from "../lib/Chakra";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Chakra cookies={pageProps.cookies} theme={theme} cssVarsRoot="body">
        <CSSReset />
        <Component {...pageProps} />
      </Chakra>
    </Provider>
  );
}

export default MyApp;
