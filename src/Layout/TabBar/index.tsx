import { useMemo } from 'react';
import { userRoutes, visitorRoutes } from '../../utils/constants/nav.utils';
import TabLink from './TabLink';
import styles from './index.module.scss';
import type { ITabBarProps } from './TabBar';

export default function TabBar({ loggedIn }: ITabBarProps): JSX.Element {
	const routes: any[] = useMemo(() => {
		if (loggedIn) {
			return userRoutes;
		} else {
			return visitorRoutes;
		}
	}, [loggedIn]);

	return (
		<nav role='none' className={`${styles['nav']} bg-three`}>
			<ul id='primary-nav' role='tablist' className={`${styles['primary-nav']} flex-center`}>
				{routes.map((route) => (
					<li key={route.id} className={`${styles['nav-item']}`}>
						<TabLink exact {...route} />
					</li>
				))}
			</ul>
		</nav>
	);
}
