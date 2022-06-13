import styles from './index.module.scss';

export default function Layout({ children }: any): JSX.Element {
	return (
		<div className='app'>
			<main className={`${styles.layout} flex`}>{children}</main>
		</div>
	);
}
