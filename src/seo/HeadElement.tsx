import Head from 'next/head';
import { useRouter } from 'next/router';
import LinkElement from './LinkElement';
import MetaElement from './MetaElement';
import { useMemo } from 'react';
import { getFullDocumentTitle } from '../utils/browser.utils';

export default function HeadElement(): JSX.Element {
	const { pathname } = useRouter();
	const documentTitle = useMemo(() => {
		return getFullDocumentTitle();
	}, [pathname]);

	return (
		<Head key='mainHead'>
			<title>{documentTitle}</title>
			<LinkElement />
			<MetaElement />
		</Head>
	);
}
