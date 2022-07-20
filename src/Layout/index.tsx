import { useState } from 'react';
import { logAny } from '../utils/logs.utils';
import styles from './index.module.scss';

export default function Layout({ children, isLoading, setIsLoading }: any): JSX.Element {
	return (
		<div className='app'>
			<main className={`${styles['layout']} m-flex`}>{children}</main>
		</div>
	);
}
