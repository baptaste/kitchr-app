import type { IDividerProps } from './Divider.d';
import styles from './index.module.scss';

export default function Divider({ text }: IDividerProps): JSX.Element {
	if (!text) return <div className={`${styles.divider} bg-four`}></div>;

	return (
		<div className={`${styles['divider']} flex-center bg-four`}>
			<p className={`${styles['divider__text']} text-center m-standard-font bg-three`}>{text}</p>
		</div>
	);
}
