import Head from 'next/head';
import authContext from '../utils/auth';
import useAuth from '../hooks/useAuth';
import { ApolloProvider } from '@apollo/client';
import Navigation from '../components/Navigation';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
	const auth = useAuth();
	return (
		<authContext.Provider value={auth}>
			<Head>
				<title>Coolest app ever</title>
			</Head>
			<ApolloProvider client={auth.getApolloClient()}>
				<Navigation />
				<div className="container pt-10 pb-20 mx-auto">
					<Component {...pageProps} />
				</div>
			</ApolloProvider>
		</authContext.Provider>
	);
}

export default MyApp;
