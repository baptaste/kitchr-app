import Image from 'next/image';
import type { IBaseIconProps } from './BaseIcon.d';

export default function BaseIcon(props: IBaseIconProps): JSX.Element {
	return (
		<Image
			src={props.src}
			onClick={props.onClick}
			alt={props.alt + ' icône'}
			width={props.width || 24}
			height={props.height || 24}
			objectFit='cover'
		/>
	);
}
