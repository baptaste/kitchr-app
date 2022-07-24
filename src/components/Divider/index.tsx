import styles from './index.module.scss';

export default function Divider({ text }: any): JSX.Element {
	if (text == null || text == undefined || text === '') return <div className={`${styles.divider} m-bg-second`}></div>;

	return (
		<div className={`${styles['divider']} m-flex-center m-bg-second`}>
			<p className={`${styles['divider__text']} m-text-center m-standard-font m-bg-light`}>{text}</p>
		</div>
	);
}
