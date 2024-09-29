import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold text-lime-600 my-10'>Choose Your Meal</h1>
			<Meals></Meals>
		</div>
	);
};

export default MealsPage;