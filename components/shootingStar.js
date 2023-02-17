export default function ShootingStar(props) {
    return (
        <div>
            <div style={{"--startingX":props.startingX, "--startingY":props.startingY, "--endingX":props.endingX, "--endingY":props.endingY}}className="absolute animate-star">
                <div className="transform absolute top-2/4 w-80 h-px bg-gradient-to-r from-white "></div >
                <div className="absolute top-full left-2/4 w-1 h-1 bg-white @apply shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_0_0_8px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,1)]"></div>
            </div>
        </div>
    )
}