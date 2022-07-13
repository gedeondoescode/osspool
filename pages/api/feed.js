import prisma from "../../lib/prisma";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		res.json(405).send({ message: "Only GET requests allowed" });
	}

	const posts = await prisma.post.findMany({
		where: { published: true },
		include: { author: true },
	});
	res.json(posts);
}
