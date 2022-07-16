import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;

	if (req.method === "DELETE") {
		const result = await prisma.post.delete({
			where: { id: Number(id) },
		});
		res.json([{ message: "Post has been deleted" }, result]);
	}
}
