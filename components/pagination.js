import { BsArrowBarLeft, BsArrowBarRight, BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination(props) {
    let maxPagination = Math.floor(props.totalPokemon / 20);
    return (
        <div className="flex justify-center items-center p-4 sm:text-xl text-lg">
            {props.offset !== 0 ? 
            <> 
                <div className="p-4 text-white" onClick={() => props.handleOffsetChange(0)} title="Skip to beginning">
                    <BsArrowBarLeft></BsArrowBarLeft>
                </div>
                <div className="p-4 text-white" onClick={() => props.handleOffsetChange(props.offset-20)} title="Previous Page">
                    <BsArrowLeft></BsArrowLeft>    
                </div>
            </>
            : <div></div> }
            { props.offset !== 1280 ?
            <>
                <div className="p-4 text-white" onClick={() => props.handleOffsetChange(props.offset+20)} title="Next Page">
                    <BsArrowRight></BsArrowRight>    
                </div>
                <div className="p-4 text-white" onClick={() => props.handleOffsetChange(1280)} title="Skip to end">
                    <BsArrowBarRight></BsArrowBarRight>    
                </div> 
            </>            
            : <div></div> }  
        </div>
    )
}