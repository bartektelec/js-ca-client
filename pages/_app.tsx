import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import Navigation from '../components/Navigation';
import { client } from 'utils/apollo';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Coolest app ever</title>
			</Head>
			<ApolloProvider client={client}>
				<Navigation />
				<div className="container pt-10 pb-20 mx-auto">
					<Component {...pageProps} />
				</div>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
