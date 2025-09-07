import { NextResponse } from "next/server";

export async function GET() {
	const secretKey = process.env.SECRET_API_KEY;

	const response = await fetch("https://jsonplaceholder.typicode.com/users", {
		headers: {
			"your-secret-key": secretKey!,
		},
	});

	if (!response.ok) {
		return NextResponse.json({
			error: "Hej, neka se greska desila prilikom prikupljanja usera",
			status: 500,
		});
	}

	const users = await response.json();
	const filteredUsers = users.slice(0, 3);
	return NextResponse.json(filteredUsers);
}
