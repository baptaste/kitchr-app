import { useState } from 'react';
import { logInfo } from '../../../../utils/logs.utils';
import styles from './index.module.scss';

export default function BaseInput({ inputName, labelText, placeholder }: any): JSX.Element {
	const [value, setValue] = useState<string>('');

	function handleChange(event: any) {
		setValue(event.target.value);
		logInfo('input change, value:', value);
	}

	return (
		<div className={`${styles.baseInput} flex-column align-start justify-between margin-ver-1`}>
			{labelText && (
				<label htmlFor={inputName} className='standardFont margin-bottom-1'>
					{labelText}
				</label>
			)}
			<input name={inputName} className={`${styles.input} flex color-light standardFont color-dark`} value={value} onChange={handleChange} placeholder={placeholder} />
		</div>
	);
}
