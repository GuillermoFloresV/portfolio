import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import MultiDisplay from "../../../components/multiDisplay";
import Pokedex from "../../../components/pokedex";
import { useState } from "react";
import Head from "next/head";

export default function PokedexHome(props) {   
    const [view, setView] = useState('M')
    return ( 
        <div className="bg-red-400 overflow-x-auto h-screen w-screen">
            <Head>
                <title>Pokedex Project</title>
                <meta name="description" content="Interactive Pokedex web application" />
            </Head>
            <Navbar></Navbar>
            <div className="text-white text-3xl text-center">
                Hello! Welcome to your Pokedex!
                <div className="text-xl">
                    Feel free to switch between the MultiDisplay and the Pokedex view as you please!
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center bg-slate-900 w-fit h-fit text-center text-white m-4 rounded-full" id="displayChoice">
                    <button className={view === 'M' ? "rounded-full p-4 items-center bg-white text-gray-500": "p-4 items-center"} id="left" onClick={() => setView('M')}>MultiDisplay</button>
                    <button className={view === 'P' ? "rounded-full p-4 items-center bg-white text-gray-500": "p-4 items-center"} id="right"  onClick={() => setView('P')}>Pokedex</button>
                </div>
            </div>
            {view === 'M' ? <MultiDisplay pokemon={props.pokeJSON}></MultiDisplay> :
                        <Pokedex></Pokedex>
            }
            <Footer></Footer>
        </div>
    )
}