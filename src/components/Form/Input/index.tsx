import { useState } from 'react';
import BaseIcon from '../../ui/icons/BaseIcon';
import styles from './index.module.scss';
import { IInputProps } from './Input';

export default function Input(props: IInputProps): JSX.Element {
	function handleChange(e: any) {
		props.onChange?.(e);
	}

	return (
		<div className={`${styles['base-input']} m-flex-column m-align-start m-justify-between m-margin-ver-1`}>
			{props.labelText && (
				<label htmlFor={props.name} className='m-standard-font m-margin-bottom-1'>
					{props.labelText}
				</label>
			)}
			<div className={`${styles['base-input-container']} m-flex m-align-center m-justify-between`}>
				<input
					type={props.type}
					name={props.name}
					required={props.required}
					className={`${styles['base-input-container__input']} m-flex m-color-light m-standard-font m-color-dark`}
					value={props.value}
					defaultValue={props.defaultValue}
					onChange={handleChange}
					placeholder={props.placeholder || ''}
				/>
			</div>
		</div>
	);
}
