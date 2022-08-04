import Layout from "../shared/components/layout";
import LoginComponent from "../landing-page/components/log-in-component";

export default function Login() {
	return (
		<Layout>
			<LoginComponent />
		</Layout>
	);
}

export { getServerSideProps } from "../shared/lib/chakra";
