import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

// DELETE /user/:id
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const id: number = req.body.id;

	if (req.method === "DELETE") {
		const result = await prisma.user.delete({
			where: {
				id: id,
			},
		});
		return res.json(result);
	}
}
