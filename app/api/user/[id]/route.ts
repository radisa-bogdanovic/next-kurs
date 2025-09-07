import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	const secretKey = "http://localhost:3000/";

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`,
		{
			headers: {
				"your-secret-key": secretKey!,
			},
		}
	);

	if (!response.ok) {
		return NextResponse.json({
			error: "Hej, neka se greska desila prilikom prikupljanja usera",
			status: 500,
		});
	}

	const user = await response.json();

	return NextResponse.json(user);
}
