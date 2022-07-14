import '/src/styles/globals.scss';
import '/src/styles/reset.css';
import '/src/styles/lib/_main.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import HeadElement from '../seo/HeadElement';
import TabBar from '../components/TabBar';
import Layout from '../store/containers/Layout';
import Auth from '../store/containers/Auth';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<HeadElement />
			<Auth>
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<TabBar />
			</Auth>
		</Provider>
	);
}
