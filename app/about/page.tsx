import { Metadata } from "next/types";
import Button from "./Button";

export const metadata: Metadata = {
	title: "About title",
	description: "About description",
};

export default function AboutPage() {
	console.log("Pozdrav iz stranice");
	return <Button />;
}
