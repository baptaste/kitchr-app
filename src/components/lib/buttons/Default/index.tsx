import styles from './index.module.scss';

export default function ButtonDefault({ text }: any) {
	return <button className={`${styles.container} button-reset`}>{text}</button>;
}
