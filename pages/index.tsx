import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

const rndNum = Math.ceil(Math.random() * 7);

const GET_POSTS = gql`
	query GetPosts{
		posts {
			created_at
			title
			description
			id
		}
		quote(id: ${rndNum}) {
			text
		}
	}
`;

interface IPost {
	title: string;
	description: string;
	created_at: string;
	id: number;
}

export default function Home() {
	const { loading, error, data } = useQuery<{
		posts: IPost[];
		quote: {
			text: string;
		};
	}>(GET_POSTS);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<div className="flex flex-col gap-4 max-w-sm mx-auto">
			<h2 className="font-medium">Quote for today: </h2>
			<p className="italic text-lg max-w-prose bg-gray-100 p-4">
				{data.quote.text}
			</p>
			<h1 className="text-2xl font-medium">Blog posts</h1>
			{data.posts?.map((post) => (
				<Link key={post.created_at} href={`/detail/${post.id}`}>
					<a className="text-blue-700 hover:underline">
						{new Date(post.created_at).toDateString()} -
						<span className="font-medium">{post.title}</span>
					</a>
				</Link>
			))}
		</div>
	);
}
