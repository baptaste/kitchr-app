import '/src/styles/globals.scss';
import '/src/styles/reset.css';
import '/src/styles/lib/_main.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from './../store';
import { UserProvider } from '@auth0/nextjs-auth0';
import HeadElement from '../seo/HeadElement';
import TabBar from '../components/TabBar';
import Layout from '../store/containers/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<UserProvider>
				<HeadElement />
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<TabBar />
			</UserProvider>
		</Provider>
	);
}
