import React from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Servise from '../../components/Servise/Servise';
import Add from '../../components/Add/Add';
import Ques from '../../components/Ques/Ques';
import Form from '../../components/Form/Form';
import Colabrators from '../../components/Colabrators/Colabrators';
import TopHeader from '../../components/TopHeader/TopHeader';
import Cards from '../../components/Cards/Cards';

function Home() {
	return (
		<div className="bg">
			<TopHeader />
			<div className="conteiner relative">
				<Hero />
				<Servise />
				<Cards />
				<Add />
				<Ques />
				<Form />
				<Colabrators />
				<Footer />
			</div>
		</div>
	);
}

export default Home;
