import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../lib/prisma";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const username = req.query.username;
	const session = await unstable_getServerSession(req, res, authOptions);

	if (req.method === "GET") {
		const result = await prisma.user.findUnique({
			where: { username: String(username) },
			select: {
				name: true,
				username: true,
				bio: true,
				posts: {
					select: {
						title: true,
						_count: {
							select: {
								comments: true,
								favorites: true,
							},
						},
					},
				},
			},
		});
		res.json(result);
	}
}
