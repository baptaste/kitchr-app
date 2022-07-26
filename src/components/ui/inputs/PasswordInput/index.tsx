import { useMemo, useState } from 'react';
import BaseIcon from '../../icons/BaseIcon';

import styles from './index.module.scss';
import type { IPasswordInputProps } from './PasswordInput';

export default function PasswordInput(props: IPasswordInputProps) {
	const showPasswordIconSrc = '/static/icons/eye-view.png';
	const hidePasswordIconSrc = '/static/icons/eye-hidden.png';

	const [inputType, setInputType] = useState<string>(props.type);

	const passwordTogglerIconSrc = useMemo(() => {
		return props.isPasswordRevealed ? hidePasswordIconSrc : showPasswordIconSrc;
	}, [props.isPasswordRevealed]);

	function handlePasswordIconClick() {
		setInputType(inputType === 'password' ? 'text' : 'password');
		props.togglePasswordRevealed();
	}

	function handleChange(e: any) {
		props.onChange?.(e);
	}

	return (
		<div className={`${styles['base-input']} flex-column align-start justify-between margin-ver-1`}>
			{props.labelText && (
				<label htmlFor={props.name} className='m-standard-font margin-bottom-1'>
					{props.labelText}
				</label>
			)}
			<div className={`${styles['base-input-container']} flex align-center justify-between`}>
				<input
					type={inputType}
					name={props.name}
					required={props.required}
					className={`${styles['base-input-container__input']} flex color-three m-standard-font color-two`}
					value={props.value}
					defaultValue={props.defaultValue}
					onChange={handleChange}
					placeholder={props.placeholder || ''}
				/>

				<div className={`${styles['base-input-container__icon']}`}>
					<BaseIcon
						src={passwordTogglerIconSrc}
						onClick={handlePasswordIconClick}
						alt={`oeil ${props.isPasswordRevealed ? 'fermé' : 'ouvert'}`}
					/>
				</div>
			</div>
		</div>
	);
}
