import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

// UPDATE /user/:id
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;
	const { name, username, email } = req.body;
	const data: Prisma.UserUpdateInput = {
		username: String(username) || undefined,
		name: String(name) || undefined,
		email: String(email) || undefined,
	};

	if (req.method === "POST") {
		const result = await prisma.user.update({
			where: {
				id: Number(id),
			},
			data,
		});
		return res.json(result);
	}
}
