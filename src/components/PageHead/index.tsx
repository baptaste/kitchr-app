import styles from './index.module.scss';

export default function PageHead({ title }: any): JSX.Element {
	return (
		<div className={`${styles.pageHead} flex wrap justify-between margin-bottom-2`}>
			<h1 className='titleFont'>{title}</h1>
		</div>
	);
}
