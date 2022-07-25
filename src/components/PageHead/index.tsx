import styles from './index.module.scss';

export default function PageHead({ title }: any): JSX.Element {
	return (
		<div className={`${styles['page-head']} flex flex-wrap justify-between margin-bottom-2`}>
			<h1 className='title-font'>{title}</h1>
		</div>
	);
}
