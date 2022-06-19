import { useState } from 'react';
import { userRoutes, visitorRoutes } from '../../utils/constants/nav.utils';
import TabLink from './TabLink';
import styles from './index.module.scss';

export default function TabBar(): JSX.Element {
	const [signedIn, setSignedIn] = useState<boolean>(false);
	const routes: any[] = signedIn ? userRoutes : visitorRoutes;

	return (
		<nav role='none' className={`${styles['nav']} m-bg-light`}>
			<ul id='primary-nav' role='tablist' className={`${styles['primary-nav']} m-flex-center`}>
				{routes.map((route) => (
					<li key={route.id} className={`${styles['nav-item']}`}>
						<TabLink exact {...route} />
					</li>
				))}
			</ul>
		</nav>
	);
}
