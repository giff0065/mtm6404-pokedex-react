import {useState, useEffect} from 'react'
import PokemonCard from '../components/PokemonCard'
import ItemCard from '../components/ItemCard'
import Row from '../components/Row'

function Pokedex(){

    const [pokedex, setPokedex] = useState([])

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then( response => response.json())
        .then(json => {setPokedex(json.results)} )
        }, []
    )

    return (
        <>
        <h1>Pokedex</h1>
        <Row>
            { pokedex.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>) }
        </Row>
        </>
    )
}

export default Pokedex