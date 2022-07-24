import { document } from '../utils/constants/document.utils';

export default function LinkElement() {
	return (
		<>
			{document.links.map(({ rel, href }: any) => (
				<link rel={rel} href={href} key={href} />
			))}
		</>
	);
}
