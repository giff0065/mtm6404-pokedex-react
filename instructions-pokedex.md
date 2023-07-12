## Setup
1. Install dependecies and start the development server
```
npm install
npm install react-router-dom
npm install bootstrap
npm run dev
```
2. Import bootstrap
```
import 'bootstrap/dist/css/bootstrap.min.css'
```

3. Import the router in the main.js
```
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
```

4. Implement the router
```
const router = createBrowserRouter([
    {
        path:'/',
        element: <App />
    }
])
```

```
<RouterProvider router={router} />
```

## Pages
Use components to serve as a virtual pages
1. Create a folder to hold your pages
2. Create/export the Pokedex.jsx component
```
function Pokedex(){
    return (
        <h1>Pokedex</h1>
    )
}

export default Pokedex
```
3. Import the component in the main.js
```
import Pokedex from './views/Pokedex'
```

4. Create the nested routes
```
children: [ 
    {
        path: '/',
        element: <Pokedex /> 
    }
]
```

5. import the outlet element in the App.js from reactRouter
```
import { Outlet } from "react-router-dom"
```

6. Render the Outlet coponent
```
<div className="container">
    <Outlet />
</div>
```

7. Create/import a 'Pokemon' and 'Items' component (steps 2-4)

## Links
1. Use a navigation bootstrap component
```
<nav className="navbar navbar-expand bg-body-tertiary">
    <div className="container-fluid">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        </ul>
    </div>
</nav>
```
2. Import the navLink component from react-router-dom
```
import { Outlet, NavLink } from "react-router-dom"
```
3. Implement the NavLink
```
<NavLink className="nav-link" to="/">Pokedex</NavLink>
```

## Fetch a list of pokemons
1. Import the useEffect to fetch the data and the useState to save it
```
import {useState, useEffect} from 'react'
```
2. Create a state variable to save the pokemon
```
const [pokedex, setPokedex] = useState([])
```
3. Through useEffect react method, make an asynchronous request to fetch the pokedex and set the value of the pokedex state variable
```
useEffect( () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( response => response.json())
    .then(json => {setPokedex(json.results)} )
    }, []
)
```

4. Ue the PokemonCard component to display the list of pokemons
```
<Row>
    { pokedex.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>) }
</Row>
```

## Show Pokemon's details
1. Implement the dynamic segment
```
import Pokemon from './views/Pokemon'
```
```
{
    path: '/pokemon/:name',
    element: <Pokemon />
}
```
2. Import useParams to get access to the dynamic segment
```
import { useParams } from 'react-router-dom'
```
```
const params = useParams()
```

3. Fetch the details data using the pokemon's name
```
import {useState, useEffect} from 'react'
```
```
useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + params.name)
        .then( response => response.json() )
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
```

4. Create the state variable
```
const [pokemon, setPokemon] = useState({abilities:[]})
```
4. Render the name, image, abilities.
```
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
```

## Programmatic navigation
1. Get the navigate function
```
import { useParams, useNavigate } from 'react-router-dom'
```
2. Create a variable to hold the navigate function
```
const navigate = useNavigate()
```

3. Verifiy the response status and redirect to home if fails
```
response => response.status === 200 ? response.json() : navigate('/')
```


## Show the items

