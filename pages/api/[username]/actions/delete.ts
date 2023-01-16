import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma";
import { authOptions } from "../..//auth/[...nextauth]";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const id = req.query.id;
	const session = await unstable_getServerSession(req, res, authOptions);

	if (session) {
		if (req.method === "DELETE") {
			const result = await prisma.user.delete({
				where: { id: String(id) },
			});
			res.json(result);
		}
	} else {
		res.redirect("/auth/signin");
	}
}
