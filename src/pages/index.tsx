import type { NextPage } from 'next';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<div className='test'>TEST DIV</div>
			<div className='test'>TEST DIV</div>
			<div className='test'>TEST DIV</div>
		</>
	);
};

export default Home;
