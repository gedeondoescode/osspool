import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

// UPDATE /user/:id
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;
	const { title, content, published } = req.body;
	const data: Prisma.PostUpdateInput = {
		title: String(title) || undefined,
		published: Boolean(published),
		content: String(content) || undefined,
	};

	if (req.method === "POST") {
		const result = await prisma.post.update({
			where: {
				id: Number(id),
			},
			data,
		});
		return res.json(result);
	}
}
