import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import authContext from '../utils/auth';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
	const router = useRouter();
	const [login, setLogin] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		logIn({ identifier: login, password });
	};

	const { isLoggedIn, logIn } = useContext(authContext);

	useEffect(() => {
		if (isLoggedIn()) {
			router.push('/admin');
		}
	});

	return (
		<div>
			<form
				className="flex flex-col max-w-sm mx-auto gap-4"
				onSubmit={handleSubmit}
			>
				<label className="flex flex-col" htmlFor="login">
					Login
					<input
						id="login"
						value={login}
						onChange={(e) => setLogin(e.currentTarget.value)}
						className="border rounded-sm border-black"
						name="login"
					/>
				</label>
				<label className="flex flex-col" htmlFor="password">
					Password
					<input
						id="password"
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
						className="border rounded-sm border-black"
						type="password"
						name="password"
					/>
				</label>
				<button
					type="submit"
					className="rounded-sm bg-blue-400 p-2 hover:bg-blue-700 hover:text-white"
				>
					Log in
				</button>{' '}
			</form>
		</div>
	);
};

export default Login;
