import TopRate from "./TopRate.js"
import Trending from "./Trending";
import MyMovie from "./MyMovie";


function AllContents() {
    return(
        <>
            <TopRate title='Top Rate Movie' />
            <Trending title='Popular Movie' />
            <MyMovie title='My Movie' />

        </>  
    )
};

export default AllContents;