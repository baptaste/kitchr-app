import '/src/styles/globals.scss';
import '/src/styles/reset.css';
import '/src/styles/lib/_main.scss';
import type { AppProps } from 'next/app';
import HeadElement from '../seo/HeadElement';
import Nav from '../components/Nav';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadElement />
			<Component {...pageProps} />
			<Nav />
		</>
	);
}
