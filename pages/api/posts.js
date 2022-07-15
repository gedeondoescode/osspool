import prisma from "../../lib/prisma";

export async function getAllPosts(req, res) {
	if (req.method === "GET") {
		const posts = await prisma.post.findMany({
			where: { published: true },
			include: { author: true },
		});
		res.json(posts);
	}
}

export async function createPost(req, res) {
	const { id } = req.query;

	if (req.metHod === "POST") {
		const result = await prisma.post.upsert({
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
		res.json(result);
	}
}

export async function deletePost(req, res) {
	const { id } = req.query;

	if (req.method === "DELETE") {
		const result = await prisma.post.delete({
			where: { id: Number(id) },
		});
		res.json({ message: "Post has been deleted" });
	}
}
