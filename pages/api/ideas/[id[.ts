import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const ideaId = req.query.id;
	const { title, content, isPublished } = req.body;
	const session = await unstable_getServerSession(req, res, authOptions);

	if (req.method === "GET") {
		const result = await prisma.post.findUnique({
			where: { id: String(ideaId) },
		});
		res.json(result);
	}

	if (session) {
		if (req.method === "UPDATE") {
			const result = await prisma.post.update({
				where: { id: String(ideaId) },
				data: {
					title: title,
					content: content,
					isPublished: isPublished,
				},
			});
			res.json(result);
		}

		if (req.method === "DELETE") {
			const result = await prisma.post.delete({
				where: { id: String(ideaId) },
			});
			res.json(result);
		}
	} else {
		res.redirect("/auth/signin");
	}
}
