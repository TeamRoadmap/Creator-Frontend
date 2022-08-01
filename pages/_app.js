import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
// 1. Import the extendTheme function
import theme from "./lib/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme} cssVarsRoot="body">
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp
