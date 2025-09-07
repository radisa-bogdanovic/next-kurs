import { notFound } from "next/navigation";
import { Metadata } from "next/types";

async function fetchUser(id: string) {
	const url = "http://localhost:3000/";
	const response = await fetch(url + `api/user/${id}`);
	const user = await response.json();
	return user;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	const user = await fetchUser(id);

	return {
		title: user.name + " " + "details",
		description: `${user.name} description`,
		openGraph: {
			title: user.name + " " + "details",
			description: `${user.name} description`,
			images: [
				{
					url: "https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg",
					width: 800,
					height: 400,
				},
			],
			locale: "sr_RS",
			type: "article",
			url: `http://localhost:3000/user/${id}`,
		},
	};
}

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
