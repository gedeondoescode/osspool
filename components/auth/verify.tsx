import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "../Layout";

export const Verify: React.FC = () => {
	return (
		<>
			<Layout minH="100vh" px="6">
				<VStack>
					<Heading size="xl">Check your email!</Heading>
					<Text size="lg" align="center">
						A sign-in link has been sent to you email.
					</Text>
				</VStack>
			</Layout>
		</>
	);
};
