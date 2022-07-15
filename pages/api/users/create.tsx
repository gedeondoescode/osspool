import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// CREATE  /user/:id
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const result = await prisma.user.create({
			data: {
				...req.body,
			},
		});
		return res.json(result);
	}
}
