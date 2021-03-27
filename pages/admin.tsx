import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import authContext from '../utils/auth';

export interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
	const router = useRouter();
	const { logOut, isLoggedIn } = useContext(authContext);

	useEffect(() => {
		if (!isLoggedIn()) {
			router.push('/login');
		}
	});
	return (
		<div>
			<h1>Hello Admin!</h1>
			<button
				onClick={logOut}
				className="rounded-sm bg-blue-400 p-2 hover:bg-blue-700 hover:text-white"
			>
				Log me out
			</button>
		</div>
	);
};

export default Admin;
