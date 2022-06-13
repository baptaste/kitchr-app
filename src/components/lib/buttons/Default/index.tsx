import styles from './index.module.scss';

export default function BaseButton({ text, classes }: any): JSX.Element {
	return <button className={`${styles.container} ${classes} button-reset standardFont`}>{text}</button>;
}
