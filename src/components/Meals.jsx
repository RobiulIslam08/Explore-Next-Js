"use client"
import React, { useEffect, useState } from 'react';

const Meals = () => {
	const [meals, setMeals] = useState([])
	const [search, setSearch] = useState('')
	const [error, setError] = useState('')
	const loadData = async () => {
		try {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
			const data = await response.json()
			setMeals(data.meals)
			setError('')
		}
		catch (err) {
			setError('error khaiso bhai')
			setMeals([])
		}
	}
	const handler = (e) => {
		setSearch(e.target.value)
	}
	useEffect(() => {
		if (search) {
			loadData();
		}
	}, [search]);
	console.log(meals)
	return (
		<div>
			<div>
				<input onChange={handler} className='py-2 text-gray-800 px-3' placeholder='search your meals ' type="text" name="" id="" />
				<button onClick={loadData} className='py-2 bg-[#45c7ab] text-black px-3'>Search</button>
				
				{/* Render meals or error message */}
				<div>
					{meals.length > 0 && !error && meals.map((meal) => (
						<p key={meal.idMeal}>{meal?.strMeal}</p>  // Use parentheses for implicit return
					))}

					{error && (
						<div>
							<p>{error}</p>  
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Meals;