import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<ChakraProvider>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	);
}
