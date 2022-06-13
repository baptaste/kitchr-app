import styles from './index.module.scss';

export default function Divider({ text }: any): JSX.Element {
	if (text == null || text == undefined || text === '') return <div className={`${styles.divider} bg-second`}></div>;

	return (
		<div className={`${styles.divider} flex-center bg-second`}>
			<p className={`${styles.text} text-center standardFont bg-light`}>{text}</p>
		</div>
	);
}
