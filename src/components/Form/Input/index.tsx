import { useState } from 'react';
import BaseIcon from '../../ui/icons/BaseIcon';
import styles from './index.module.scss';
import { IInputProps } from './Input';

export default function Input(props: IInputProps): JSX.Element {
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
					type={props.type}
					name={props.name}
					required={props.required}
					className={`${styles['base-input-container__input']} flex color-three m-standard-font color-two`}
					value={props.value}
					defaultValue={props.defaultValue}
					onChange={handleChange}
					placeholder={props.placeholder || ''}
				/>
			</div>
		</div>
	);
}
