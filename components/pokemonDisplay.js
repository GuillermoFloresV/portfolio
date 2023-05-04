import { useEffect, useState } from "react";
import Image from "next/image";


export default function PokemonSingleDisplay(props) {
    const [pokemon,setPokemon] = useState();
    const [status,setStatus] = useState('');
    useEffect(() => {
        setStatus('Loading...');
        // fetches all data, when I decide to make a modal of sorts for more poke info, can use this data.
        fetch(props.pokemon)
        .then(response => response.json())
        .then(setPokemon)
        .then(() => setStatus('Loaded Successfully'))
        .catch(() => setStatus('Loading failed, try again later.'))
    }, [props.pokemon])

    if(pokemon === undefined) {
        return <div className="text-white">{status}</div>
    } else {
        return (
            <div>
                <div className="sm:w-64 w-fit h-64 p-2 hover:bg-white bg-slate-300">
                    
                    <div id="pokemonData" className="capitalize hyphens-none">                    
                        #{pokemon.id}<br></br>
                        Name: {pokemon.name}
                    </div>
                    <div className="flex justify-center">
                        <Image alt={"Picture of the pokemon " + pokemon.name} src={pokemon.sprites.front_default !== null ? pokemon.sprites.front_default : <div className="text-2xl text-white">No picture available.</div> } width={150} height={150}></Image>
                    </div>
                    {/* <div id="pokeType" className="capitalize">
                        {pokemon.types.map(i => {
                            console.log(i)
                            {pokemon.types[i].type.name}
                        })}
                        {pokemon.types[0].type.name}
                    </div> */}
                </div>
            </div>
        )
    }
}