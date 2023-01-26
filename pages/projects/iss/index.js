import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import { BsInfoCircle } from "react-icons/bs";
import {useEffect, useState} from 'react';

export async function getServerSideProps() {
    const issAPIData = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const data = await issAPIData.json()
    return {
        props : {
            issData: data
        },
    }
}

function sinSquared(x) {
    return ((1-Math.cos(2*x))/2);
}
export function calcDistance(location,issLat,issLon) {
    // This function uses the Haversine formula
    const earthRadius = 6371;
    const distance = 2*earthRadius*
        (Math.asin
            (Math.sqrt
                ((sinSquared((issLat-location[0])/2))
                +Math.cos(location[0])*Math.cos(issLat)*sinSquared((issLon-location[1])/2))
            )    
        );
    return distance.toFixed(2);
}
export default function Home(props) {
    const [location, setLocation] = useState();
    const [distance, setDistance] = useState();
    useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const latitude = coords.latitude;
                const longitude = coords.longitude
                setLocation([latitude, longitude]);
            })
        }
    }, []);
  return (
    <div className="bg-black overflow-x-auto h-screen">
        <Navbar></Navbar>
        <div className="text-white text-8xl flex justify-center">
            How far am I from the ISS?
        </div>
        <div id="about" className="text-white text-5xl flex justify-center">
            This mini-project aims to be able to have an interactive webpage to get the distance between you and the International Space Station (ISS).
        </div>
        <div id="user-location" className="text-white text-3xl flex justify-center p-8">
            {location == null ? "Please allow location access to see this project work." : "Your location in latitude, longitude: "+ location}
        </div>
        <div id="iss-location" className="text-white text-3xl flex justify-center p-8">
            {"The ISS is currently at this location in latitude, longitude: "+ props.issData.latitude + "," + props.issData.longitude}
        </div>
        <div className="flex justify-center p-8">
            {location == null ? "" : <button onClick={ () => setDistance(calcDistance(location,props.issData.latitude,props.issData.longitude))}
            className="text-black bg-white border-2 border-blue-500 rounded-md p-4 hover:bg-zinc-300">Calculate your distance here!</button>}
        </div>
        <div id="distance" className="text-white text-3xl flex justify-center pb-4">{distance == null ? null:"Currently, you are about "+distance+" km away from the ISS!"}
        </div>
        <Footer></Footer>
    </div>
    );
}
