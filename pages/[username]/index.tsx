import useSWR from "swr";
import axios from "axios";
import { Text, Heading, VStack } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Profile() {
	const router = useRouter();
	const { username } = router.query;

	const endpoint = `/api/${username}`;
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data } = useSWR(endpoint, fetcher);

	return (
		<Layout>
			<VStack>
				<VStack>
					<Heading>{data?.name}</Heading>
					<Heading>{data?.username}</Heading>
				</VStack>

				<Text>{data?.bio}</Text>
			</VStack>
		</Layout>
	);
}
