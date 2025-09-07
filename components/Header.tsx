import Link from "next/link";

export default function Header() {
	return (
		<div>
			<Link href={"/"}>Pocetna</Link>
			<Link href={"/about"}>O nama</Link>
			<Link href={"/users"}>Korisnici</Link>
		</div>
	);
}
