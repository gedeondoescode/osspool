import prisma from "../../lib/prisma";

// CREATE or UPDATE /user/:id
export async function upsertUser(req, res) {
	const { id } = req.query;

	if (req.method === "POST") {
		const result = await prisma.user.upsert({
			create: {
				data: {
					...req.body,
				},
			},
			update: {
				data: {
					...req.body,
				},
			},
			where: { id: Number(id) },
		});
		return res.json(result);
	}
}
// GET /user/:id
export async function getUser(req, res) {
	const { id } = req.query;

	if (req.method === "GET") {
		const result = await prisma.user.findUnique({
			where: {
				id: Number(id),
			},
		});
		return res.json(result);
	}
}

// DELETE /user/:id
export async function deleteUser(req, res) {
	const { id } = req.query;

	if (req.method === "DELETE") {
		const result = await prisma.user.delete({
			where: {
				id: Number(id),
			},
		});
		return res.json(result);
	}
}
