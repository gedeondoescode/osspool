import prisma from "../../lib/prisma";

// required fields: name, email
export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).send({ message: "Only POST is allowed" });
	}

	if (req.method === "POST") {
		const result = await prisma.user.create({
			data: {
				...req.body,
			},
		});
		return res.json(result);
	}
}
