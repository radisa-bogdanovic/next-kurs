"use client";

export default function Button() {
	console.log("pozdrav iz buttona");
	return <button onClick={() => alert("hello")}>about page</button>;
}
