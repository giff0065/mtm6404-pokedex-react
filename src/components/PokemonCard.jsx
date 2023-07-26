import { Link } from 'react-router-dom'

function PokemonCard (props) {
  const pokemon = props.pokemon
  const index = pokemon.url.substring(pokemon.url.indexOf('/', 32) + 1, pokemon.url.length -1)

  return (
    <div className="col col-6 col-md-4 col-lg-3 mb-3">
      <Link className="text-decoration-none" to={'/pokemon/' + pokemon.name}>
      <div className="card text-center">
        <div className="card-body">
          <img className="fluid-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} alt={pokemon.name} />
        </div>
        <div className="card-footer text-muted text-capitalize">
            {pokemon.name}
        </div>
      </div>
      </Link>
    </div>
  )
}

export default PokemonCard