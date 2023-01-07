import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { title, content, email } = req.body;
	const session = await unstable_getServerSession(req, res, authOptions);

	if (session) {
		if (req.method === "POST") {
			const result = await prisma.post.create({
				data: {
					title: title,
					content: content,
					author: { connect: { email: email } },
				},
			});
			res.json(result);
		}
	} else {
		res.redirect("/auth/signin");
	}
}
