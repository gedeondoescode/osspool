import prisma from "../../../lib/prisma";

// UPDATE /user/:id
export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === "GET") {
		const result = await prisma.user.update({
			data: {
				...req.body,
			},
			where: {
				id: Number(id),
			},
		});
		return res.json(result);
	}
}
