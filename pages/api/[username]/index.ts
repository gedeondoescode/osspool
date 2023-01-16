import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const username = req.query.username;

	if (req.method === "GET") {
		const result = await prisma.profile.findUnique({
			where: { username: String(username) },
		});
		res.json(result);
	}
}
