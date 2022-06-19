import { MouseEvent } from 'react';
import styles from './index.module.scss';

interface IBaseButtonProps {
	type?: 'button' | 'reset' | 'submit' | undefined;
	text: string;
	classes: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function BaseButton({ type, text, classes, onClick }: IBaseButtonProps): JSX.Element {
	return (
		<button type={type ? type : 'button'} onClick={onClick} className={`${styles['base-button']} ${classes} m-button-reset m-standard-font`}>
			{text}
		</button>
	);
}
