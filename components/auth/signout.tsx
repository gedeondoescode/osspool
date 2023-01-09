import React from "react";
import { Heading, Text, VStack, Button, LinkOverlay } from "@chakra-ui/react";
import Layout from "../Layout";

export const SignOut: React.FC = () => {
	return (
		<>
			<Layout minH="100vh" px="6">
				<VStack>
					<Heading size="xl">Signing off for now.</Heading>
					<Text size="lg" align="center">
						You have successfully signed out!
					</Text>
					<Button width="100%">
						<LinkOverlay href="http://localhost:3000/auth/signin">
							Return to sign-in page
						</LinkOverlay>
					</Button>
				</VStack>
			</Layout>
		</>
	);
};
