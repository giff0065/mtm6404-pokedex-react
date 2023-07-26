import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Pokemon(){
    const params = useParams()
    const [pokemon, setPokemon] = useState({abilities:[]})

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + params.name)
        .then( response => response.status === 200 ? response.json() : navigate('/') )
        .then(json => {setPokemon(
            {
                name: json.name,
                id: json.id,
                image: json.sprites.other['official-artwork'].front_default,
                abilities: json.abilities 
            }
            )} )
        }, []
    )
    return (
        <>
        <h1>Pokemon</h1>
        <p>{pokemon.name}</p>
        <img src={pokemon.image} alt="" />
        <ul>
            {pokemon.abilities.map((element, index) => <li key={index}>{element.ability.name}</li> ) }
        </ul>
    </>
    )
}

export default Pokemon