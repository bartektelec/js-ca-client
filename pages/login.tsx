import * as React from 'react';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
	return (
		<div>
			<form className="flex flex-col max-w-sm mx-auto gap-4">
				<label className="flex flex-col" htmlFor="login">
					Login
					<input
						id="login"
						className="border rounded-sm border-black"
						name="login"
					/>
				</label>
				<label className="flex flex-col" htmlFor="password">
					Password
					<input
						id="password"
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
