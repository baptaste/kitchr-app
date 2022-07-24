import { PropsWithChildren, useState } from 'react';
import Auth from '../store/containers/Auth';
import TabBar from '../store/containers/TabBar';
import { logAny } from '../utils/logs.utils';
import styles from './index.module.scss';
import { ILayout } from './Layout';

export default function Layout({ children }: PropsWithChildren<ILayout>): JSX.Element {
	return (
		<div className='app'>
			<Auth>
				<main className={`${styles['layout']} m-flex`}>{children}</main>
				<TabBar />
			</Auth>
		</div>
	);
}
