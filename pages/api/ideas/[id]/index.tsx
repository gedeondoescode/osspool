import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
// GET /user/:id
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;

	if (req.method === "GET") {
		const result = await prisma.post.findUnique({
			where: {
				id: Number(id),
			},
			select: {
				title: true,
				content: true,
				published: true,
			},
		});
		return res.json(result);
	}
}
