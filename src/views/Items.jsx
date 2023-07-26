import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import ItemCard from '../components/ItemCard'
import Row from '../components/Row'

function Items(){
    const params = useParams()
    const [items, setItems] = useState([])

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/item/' + params.name)
        .then( response => response.json())
        .then(json => {setItems(json.results)} )
        }, []
    )
    return (
        <>
        <h1>Items</h1>
        <Row>
            { items.map(item => <ItemCard key={item.name} item={item}></ItemCard>) }
        </Row>
        </>

    )
}

export default Items