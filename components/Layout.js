import Navbar from "./LandingPage/Navbar";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
