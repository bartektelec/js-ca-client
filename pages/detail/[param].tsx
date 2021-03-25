import * as React from 'react';
import { client, gql } from '../../utils/apollo';
import type { GetServerSideProps } from 'next';

export interface DetailProps {
	data: {
		title: string;
		created_at: string;
		description: string;
	};
}

const Detail: React.FC<DetailProps> = ({ data }) => {
	return (
		<div className="flex flex-col gap-4 max-w-sm mx-auto">
			<p>{new Date(data.created_at).toDateString()}</p>
			<h1 className="text-2xl font-medium">{data.title}</h1>
			<p className="max-w-prose text-sm">{data.description}</p>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const DETAIL_QUERY = gql`
    query getPostDetails {
            post(id: ${context.params.param}) {
                title,
                created_at,
                description
            }
        }`;
	try {
		const {
			data: { post },
		} = await client.query({ query: DETAIL_QUERY });

		return {
			props: {
				data: post,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default Detail;
