import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import ShootingStar from "../../../components/shootingStar";
import {useEffect, useState} from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
        // Factoring in orbital height
        const totalDistance = distance + 408.733;
    return totalDistance.toFixed(2);
}

function makeStars(num) {
    // +1 is so that you can't get 0 stars
    return Math.floor(Math.random() * num) + 1;
}

export default function Home(props) {
    const [location, setLocation] = useState();
    const [distance, setDistance] = useState();
    const [moreInfo, setMoreInfo] = useState(false);
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
    <div className="bg-gradient-to-tl from-blue-900 to-black overflow-x-auto h-screen w-screen ">

        <Head>
            <title>How far is the ISS?</title>
            <meta name="description" content="How far am I from the ISS" />
        </Head>
        <Navbar></Navbar>
        <ShootingStar startingX={'25vw'} startingY={'50vh'} endingX={'35vw'} endingY={'60vh'}></ShootingStar>
        <ShootingStar startingX={'30vw'} startingY={'0vh'} endingX={'50vw'} endingY={'25vh'}></ShootingStar>
        <ShootingStar startingX={'15vw'} startingY={'25vh'} endingX={'40vw'} endingY={'50vh'}></ShootingStar>
        <div className="text-white text-5xl flex justify-center">
            How far am I from the ISS?
        </div>
        <div className="p-4 flex justify-center">
            <Image className="rounded-lg" src={"/iss.jpg"} alt="Picture of the International Space Station" width={500} height={250}></Image>
        </div>
        <div id="user-location" className="text-white text-xl flex justify-center p-8">
            {location == null ? "Please allow location access to see this project work." : "Your location in latitude, longitude: "+ location}
        </div>
        <div id="iss-location" className="text-white text-xl flex justify-center p-8">
            {"The ISS is currently at this location in latitude, longitude: "+ props.issData.latitude + "," + props.issData.longitude}
        </div>
        <div className="flex justify-center p-8">
            {location == null ? "" : <button onClick={ () => setDistance(calcDistance(location,props.issData.latitude,props.issData.longitude))}
            className="text-black bg-white border-2 border-blue-500 rounded-md p-4 hover:bg-zinc-300">Calculate your distance here!</button>}
        </div>
        {distance === null ? null : 
            <>
                <div id="distance" className="text-white text-3xl flex justify-center pb-4">{distance == null ? null:"Currently, you are about "+distance+" km away from the ISS! (Including orbital height)"}</div>
            </>
        }
        <div className="flex justify-center p-8">
            <button className="text-black bg-white border-2 border-blue-500 rounded-md p-4 hover:bg-zinc-300" onClick={ () => setMoreInfo(!moreInfo)}>{moreInfo === false ? "Learn More" : "Hide extra info"}</button>
        </div>
        {moreInfo === false ? null : <div className="text-white p-4">
            <ul className="list-disc">
                <li>ISS location data provided by: <Link href={"https://wheretheiss.at/"} passHref>WhereTheISS.at</Link></li>
                <li>No user location data is stored by the website, the browser simply takes your location estimate based on your IP address, and displays the values to you. This webpage does not enable high accuracy for geolocation.</li>
                <li>For calculating the distance I used the <Link href={"https://en.wikipedia.org/wiki/Haversine_formula"} passHref>Haversine Formula.</Link></li>
            </ul>      
        </div>
        }

        <Footer></Footer>
    </div>
    );
}
