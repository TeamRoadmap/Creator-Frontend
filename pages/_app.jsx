import "../styles/globals.css";
import { CSSReset } from "@chakra-ui/react";
import { Chakra } from "../shared/lib/chakra";
import theme from "../shared/lib/theme";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Chakra
        cookies={pageProps.cookies}
        theme={theme}
        cssVarsRoot="body"
      >
        <CSSReset />
        <Component {...pageProps} />
      </Chakra>
    </Provider>
  );
}

export default MyApp;
