import "../styles/globals.css";
import { CSSReset } from "@chakra-ui/react";
import { Chakra } from "../shared/lib/chakra";
import theme from "../shared/lib/theme";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ProtectedPath from "../shared/components/ProtectedPath";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const publicPaths = ["/login", "/signup", "/"];
  return (
    <Provider store={store}>
      <Chakra
        cookies={pageProps.cookies}
        theme={theme}
        cssVarsRoot="body"
      >
        {publicPaths.includes(route.pathname) ? (
          <>
            <CSSReset />
            <Component {...pageProps} />
          </>
        ) : (
          <ProtectedPath>
            <CSSReset />
            <Component {...pageProps} />
          </ProtectedPath>
        )}
      </Chakra>
    </Provider>
  );
}

export default MyApp;

export { getServerSideProps } from "../shared/lib/chakra";
