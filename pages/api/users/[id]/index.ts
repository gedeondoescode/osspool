import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
// GET /user/:id
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;

	if (req.method === "GET") {
		const result = await prisma.user.findUnique({
			where: {
				id: Number(id),
			},
			select: {
				name: true,
				username: true,
				email: true,
			},
		});
		return res.json(result);
	}
}
