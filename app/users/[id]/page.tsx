import { notFound } from "next/navigation";
import { Metadata } from "next/types";

async function fetchUser(id: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	const user = await response.json();
	return user;
}

export const metadata: Metadata = {
	title: "Single user",
	description: "Single user description ",
};

export default async function SingleUser({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const user = await fetchUser(id);
	console.log(user);
	if (!Object.keys(user).length) {
		return notFound();
	}

	return (
		<div>
			<p>NAME : {user.name}</p>
			<p>email : {user.email}</p>
			<p>phone : {user.phone}</p>
		</div>
	);
}
