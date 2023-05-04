import { useEffect, useState } from "react";
import PokemonSingleDisplay from "./pokemonDisplay";
import Loading from "./loading";
import Pagination from "./pagination";

export default function MultiDisplay(props) {

    let [offset,setOffset] = useState(0);
    function handleOffsetChange(params) {
        console.log(offset)
        setOffset(params)
    }

    let [status, setStatus] = useState('');
    let [currPokemonJSON, setCurrPokemonJSON] = useState()
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset="+offset+"&limit=20")
        .then(response => response.json())
        .then(setCurrPokemonJSON)
        .then(setStatus('Loaded'))
        .catch(setStatus('Loading failed.'))
    }, [offset])
    // This component will display multiple different data types but encapsulate them into a single "parent"
    if (currPokemonJSON === undefined) {
        return <Loading />
    } else {
        let currPokemon = currPokemonJSON.results;
        let totalPokemon = currPokemonJSON.count;
        return (
            <>
                <div className="flex grid justify-center grid-cols-1 gap-4 justify-items-center sm:grid-cols-4 bg-transparent">
                {currPokemon.map((pokemon, index) => (
                    <PokemonSingleDisplay key={index} pokemon={pokemon.url}></PokemonSingleDisplay>
                ))}
                </div>
                <Pagination offset={offset} handleOffsetChange={handleOffsetChange} totalPokemon={totalPokemon}></Pagination>
            </>
        )
    }
}