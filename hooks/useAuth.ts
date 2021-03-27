import { useState } from 'react';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import axios from 'axios';

const useAuth = () => {
	const [token, setToken] = useState<string>('');

	const isLoggedIn = () => Boolean(token);

	const getBearerHeader = () =>
		token
			? {
					authorization: `Bearer ${token}`,
			  }
			: null;

	const getApolloClient = () => {
		const link = new HttpLink({
			uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
			headers: getBearerHeader(),
		});
		return new ApolloClient({
			link,
			cache: new InMemoryCache(),
		});
	};

	const logIn = async ({
		identifier,
		password,
	}: {
		identifier: string;
		password: string;
	}) => {
		const response = await axios.post(
			process.env.NEXT_PUBLIC_API_URL + '/auth/local',
			{
				identifier,
				password,
			}
		);

		const { data } = response;

		if (data?.jwt) {
			setToken(data.jwt);
		}
	};

	const logOut = () => {
		setToken('');
	};

	return {
		token,
		setToken,
		isLoggedIn,
		logIn,
		logOut,
		getApolloClient,
	};
};

export default useAuth;
