import {
	Box,
	Heading,
	VStack,
	Text,
	Input,
	Divider,
	Button,
	InputGroup,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Layout from "../Layout";

type AuthProps = {
	onMagicLinkLogin: (email: string) => void;
	onGithubLogin?: () => void;
	onGoogleLogin?: () => void;
	error?: string;
};

export const Auth: FC<AuthProps> = ({
	onGithubLogin,
	onGoogleLogin,
	onMagicLinkLogin,
	error,
}) => {
	const [email, setEmail] = useState("");

	return (
		<>
			<Layout minH="100vh" px="6">
				<VStack>
					<Heading>Welcome to OSSPool!</Heading>
					<Box maxW="md">
						<Box py="2" px="4">
							<VStack spacing="3">
								<Text size="lg" align="center">
									Enter your email address to sign up or log in or continue with
									Google or Github.
								</Text>
								<form
									onSubmit={(e) => {
										e.preventDefault();
										onMagicLinkLogin(email);
									}}
									style={{ width: "100%" }}
								>
									<FormControl>
										<FormLabel mb="0">Email Address</FormLabel>
										<Input
											variant="outline"
											placeholder="Email Address"
											onChange={(e) => setEmail(e.target.value)}
											mb="15px"
										/>
										<Button width="100%" type="submit">
											Let&apos;s Go!
										</Button>
									</FormControl>
								</form>

								<Divider orientation="horizontal" />
								<Button width="100%" onClick={onGoogleLogin}>
									Continue with Google
								</Button>
								<Button width="100%" onClick={onGithubLogin}>
									Continue with Github
								</Button>
							</VStack>
						</Box>
					</Box>
				</VStack>
			</Layout>
		</>
	);
};
