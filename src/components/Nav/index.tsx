import { useState } from 'react';
import { userRoutes, visitorRoutes } from '../../utils/nav.utils';
import NavLink from './NavLink';
import styles from './index.module.scss';

export default function Nav() {
	const [signedIn, setSignedIn] = useState<boolean>(false);
	const routes: any[] = signedIn ? userRoutes : visitorRoutes;

	return (
		<div className={`${styles.container} flex-center justify-evenly`}>
			{routes.map((route) => (
				<NavLink exact key={route.id} {...route} />
			))}
		</div>
	);
}
