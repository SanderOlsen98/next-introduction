import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
	return (
		<Layout>
			<Head title="About" />

			<div className="container">
				<h1>About page</h1>
			</div>
		</Layout>
	);
}
