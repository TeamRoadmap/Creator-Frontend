import Layout from "../shared/components/layout";
import SignUpComponent from "../landing-page/components/sign-up-component";

export default function SignUp() {
	return (
		<Layout>
			<SignUpComponent />
		</Layout>
	);
}

export { getServerSideProps } from "../shared/lib/chakra";
