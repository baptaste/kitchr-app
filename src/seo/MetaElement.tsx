import { document } from '../utils/constants/document.utils';

export default function MetaElement() {
	return (
		<>
			<meta key='charset' charSet={document.metadata.charset} />
			<meta httpEquiv={document.metadata.compatibility.httpEquiv} content={document.metadata.compatibility.content} />
			{document.metadata.metas.map(({ name, content }: any) => (
				<meta key={name} name={name} content={content} />
			))}
		</>
	);
}
