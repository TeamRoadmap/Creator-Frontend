import "../styles/globals.css";
import { CSSReset } from "@chakra-ui/react";
// 1. Import the extendTheme function

import { Chakra } from "../shared/lib/chakra";
import theme from "../shared/lib/theme";

function MyApp({ Component, pageProps }) {
	return (
		<Chakra cookies={pageProps.cookies} theme={theme} cssVarsRoot="body">
			<CSSReset />
			<Component {...pageProps} />
		</Chakra>
	);
}

export default MyApp;