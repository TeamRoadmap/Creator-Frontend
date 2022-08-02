import '../styles/globals.css'
import { CSSReset } from "@chakra-ui/react";
// 1. Import the extendTheme function
import theme from "../lib/theme";
import { Chakra } from "../lib/Chakra";

function MyApp({ Component, pageProps }) {
	return (
		<Chakra cookies={pageProps.cookies} theme={theme} cssVarsRoot="body">
			<CSSReset />
			<Component {...pageProps} />
		</Chakra>
	);
}

export default MyApp
