import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma";
import { authOptions } from "../..//auth/[...nextauth]";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const id = req.query.id;
	const { name, username, bio, image } = req.body;
	const session = await unstable_getServerSession(req, res, authOptions);

	if (session) {
		if (req.method === "UPDATE") {
			const result = await prisma.user.update({
				where: { id: String(id) },
				data: {
					name: name || undefined,
					username: username || undefined,
					bio: bio || undefined,
					image: image || undefined,
				},
			});
			res.json(result);
		}
	} else {
		res.redirect("/auth/signin");
	}
}
