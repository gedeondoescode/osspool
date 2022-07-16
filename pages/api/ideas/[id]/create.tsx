import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { title, content, published } = req.body;
	const { id } = req.query;

	const data: Prisma.PostCreateInput = {
		title: String(title),
		content: String(content),
		published: Boolean(published),
		author: {
			connect: {
				id: Number(id),
			},
		},
	};

	if (req.method === "POST") {
		const result = await prisma.post.create({
			data,
		});
		res.json(result);
	}
}
