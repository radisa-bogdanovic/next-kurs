import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Users page",
	description: "Users description",
};

export default function UserPage() {
	console.log("Pozdrav iz usera");
}
