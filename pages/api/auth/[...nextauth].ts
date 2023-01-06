import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: Number(process.env.EMAIL_SERVER_PORT),
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_ID as string,
		// 	clientSecret: process.env.GOOGLE_SECRET as string,
		// }),
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
	pages: {
		signIn: "/auth/signin",
		// 	signOut: "/auth/signout",
		// 	error: "/auth/error", // Error code passed in query string as ?error=
		// 	newUser: "/auth/onboarding", // New users will be directed here on first sign in (leave the property out if not of interest)
	},

	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
