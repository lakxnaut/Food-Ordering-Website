import classes from './AvailableMeals.module.css'




import React from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';



const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Rajma',
        description: 'Finest fish and veggies',
        price: 60,
    },
    {
        id: 'm2',
        name: 'Dhokla',
        description: 'A german specialty!',
        price: 40,
    },
    {
        id: 'm3',
        name: 'Idli Sambhar',
        description: 'Southie, raw, meaty',
        price: 90,
    },
    {
        id: 'm4',
        name: 'Chowmeen',
        description: 'Chinoo...',
        price: 45,
    },
];

const AvailableMeals = () => {

    const MealsList = DUMMY_MEALS.map(item => <MealItem id={item.id} key={item.id} name={item.name} description={item.description} price={item.price} />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {MealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals