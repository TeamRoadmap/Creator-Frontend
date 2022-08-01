import '../styles/globals.css'
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// 1. Import the extendTheme function
import theme from "./lib/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme} cssVarsRoot="body">
			<CSSReset />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp
