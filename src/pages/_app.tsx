import '/src/styles/globals.scss';
import '/src/styles/reset.css';
import '/src/styles/lib/_main.scss';
import type { AppProps } from 'next/app';
import HeadElement from '../seo/HeadElement';
import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadElement />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Nav />
		</>
	);
}
