import * as React from 'react';
import Link from 'next/link';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
	return (
		<nav className="bg-blue-50 p-2">
			<ul className="container mx-auto flex gap-4">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
				<li>
					<Link href="/login">
						<a>Login</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
