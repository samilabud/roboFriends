import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    const robotListed = robots.map((value, i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}  />
    })
    //ternario
    return !robots.length ? <h2>Sin resultados</h2>
    : (
            <div>
                {robotListed}
            </div>
        );
}

export default CardList;