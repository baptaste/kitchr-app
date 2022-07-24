import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import BaseIcon from '../../icons/BaseIcon';
import styles from './index.module.scss';

interface IBaseInputProps {
	inputType: string;
	inputName: string;
	labelText: string;
	placeholder?: string;
	inputValue: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}

export default function BaseInput({ inputType, inputName, labelText, placeholder, inputValue, onChange, required }: IBaseInputProps): JSX.Element {
	const showPasswordIconSrc = '/static/icons/eye-view.png';
	const hidePasswordIconSrc = '/static/icons/eye-hidden.png';
	const [type, setInputType] = useState<string>(inputType);
	const [isPasswordRevealed, setIsPasswordRevealed] = useState<boolean>(false);
	const passwordTogglerIconSrc = isPasswordRevealed ? hidePasswordIconSrc : showPasswordIconSrc;

	function passwordIconClickHandler() {
		setInputType(type === 'password' ? 'text' : 'password');
		setIsPasswordRevealed(!isPasswordRevealed);
	}

	return (
		<div className={`${styles['base-input']} m-flex-column m-align-start m-justify-between m-margin-ver-1`}>
			{labelText && (
				<label htmlFor={inputName} className='m-standard-font m-margin-bottom-1'>
					{labelText}
				</label>
			)}
			<div className={`${styles['base-input-container']} m-flex m-align-center m-justify-between`}>
				<input
					type={type}
					name={inputName}
					required={required}
					className={`${styles['base-input-container__input']} m-flex m-color-light m-standard-font m-color-dark`}
					value={inputValue}
					onChange={onChange}
					placeholder={placeholder || ''}
				/>
				{inputName === 'password' && (
					<div className={`${styles['base-input-container__icon']}`}>
						<BaseIcon
							src={passwordTogglerIconSrc}
							onClick={passwordIconClickHandler}
							alt={`oeil ${isPasswordRevealed ? 'fermé' : 'ouvert'}`}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
