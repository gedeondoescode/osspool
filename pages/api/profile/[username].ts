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
		const result = await prisma.profile.findUnique({
			where: { username: String(username) },
		});
		res.json(result);
	}
}
