import React from 'react';
import '../ShowClient/ShowClient.css';
import ProfessionalCard from '../Components/Cards/ClientCard';

export default function ShowClientPage ()
{
    const numberOfCards = 100;

    const cardArray = Array.from( { length: numberOfCards } ).map( ( _, index ) => (
        <ProfessionalCard key={ index }/>
    ) );

    return (
        <div className='show-products-page'>
            <h1 style={{marginBottom:"30px"}}>العملاء</h1>
            <div className='CardsDiv'>
                { cardArray }
            </div>
        </div>
    );
}
