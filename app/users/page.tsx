import { Metadata } from "next/types";
import { UserComponent } from "./UsersPage";

export const metadata: Metadata = {
	title: "Users page",
	description: "Users description",
};

export default async function UserPage() {
	return <UserComponent />;
}
