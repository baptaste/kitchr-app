import Image from 'next/image';

interface IBaseIconProps {
	src: string;
	alt: string;
	onClick?: () => any;
}

export default function BaseIcon({ src, alt, onClick }: IBaseIconProps): JSX.Element {
	return <Image src={src} onClick={onClick} alt={alt + ' icône'} width={24} height={24} objectFit='cover' />;
}
