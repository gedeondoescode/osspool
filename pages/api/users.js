import prisma from "../../lib/prisma";

export async function create(req, res) {
	if (req.method === "POST") {
		const result = await prisma.user.create({
			data: {
				...req.body,
			},
		});
		return res.json(result);
	}
}

export async function getUser(req, res) {
	const { username } = req.query;
	if (req.method === "GET") {
		const result = await prisma.user.findUnique({
			where: {
				username: String(username),
			},
		});
		return res.json(result);
	}
}
