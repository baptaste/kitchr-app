import type { NextPage } from 'next';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<div className="app">
			<main className="layout flex">
				<Hero />
				<div className="test">TEST DIV</div>
				<div className="test">TEST DIV</div>
				<div className="test">TEST DIV</div>
			</main>
		</div>
	);
};

export default Home;
