import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { Auth } from "../../components/auth/auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignIn() {
	return (
		<>
			<Auth
				onMagicLinkLogin={(email) => signIn("email", { email })}
				onGithubLogin={() => signIn("github")}
				onGoogleLogin={() => signIn("google")}
			/>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
			props: {
				session,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};
