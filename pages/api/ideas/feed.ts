import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const posts = await prisma.post.findMany({
			where: { published: true },
			select: {
				title: true,
				content: true,
				viewCount: true,
				published: true,
				author: {
					select: {
						username: true,
					},
				},
			},
		});
		res.json(posts);
	}
}
