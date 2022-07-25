import '/src/styles/globals.scss';
import '/src/styles/reset.css';
import '/src/styles/lib/main.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import HeadElement from '../seo/HeadElement';
import Layout from '../store/containers/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<HeadElement />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
