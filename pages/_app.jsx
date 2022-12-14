import "../styles/globals.css";
import { CSSReset } from "@chakra-ui/react";
import { Chakra } from "../shared/lib/chakra";
import theme from "../shared/lib/theme";
import { Provider } from "react-redux";
import { store , persistor} from "../redux/store";
import ProtectedPath from "../shared/components/ProtectedPath";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/lib/integration/react";
import "../styles/quill.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from "../shared/components/user-provider";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const publicPaths = ["/login", "/signup", "/"];
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <UserProvider />
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
          <ToastContainer
            theme="dark"
            hideProgressBar={true}
            position="bottom-center"
            autoClose={1000}
          />
        </Chakra>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

export { getServerSideProps } from "../shared/lib/chakra";
