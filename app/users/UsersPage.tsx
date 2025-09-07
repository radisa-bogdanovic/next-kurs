"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	// opcionalno: address i company
};

export const UserComponent = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const resposne = await fetch("/api/user");
			const users = await resposne.json();
			setUsers(users);
		};

		getUsers();
	}, []);

	return (
		<div>
			{users.map((user: User) => {
				return (
					<div key={user.id}>
						<p>NAME : {user.name}</p>
						<p>email : {user.email}</p>
						<p>phone : {user.phone}</p>
						<Link href={`users/${user.id}`}>See details</Link>
					</div>
				);
			})}
		</div>
	);
};
