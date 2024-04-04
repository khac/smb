import React from 'react';
import './styles.css';


const HorizontalScrollData = ({timeInSeconds}) => {
    return (
        <div class="scroll" style={{"--time": timeInSeconds }}>
            <div>
                <span>Discover</span>
                <span>Local Gems</span>
                <span>Community Connection</span>
                <span>Explore Nearby</span>
                <span>Hidden Treasures</span>
                <span>Neighborhood Finds</span>
                <span>Locally Yours</span>
                <span>Uncover Excellence</span>
                <span>Your Local Hub</span>
                <span>Nearby Delights</span>
            </div>
            <div>
                <span>Discover</span>
                <span>Local Gems</span>
                <span>Community Connection</span>
                <span>Explore Nearby</span>
                <span>Hidden Treasures</span>
                <span>Neighborhood Finds</span>
                <span>Locally Yours</span>
                <span>Uncover Excellence</span>
                <span>Your Local Hub</span>
                <span>Nearby Delights</span>
            </div>
        </div>
        
    );
}

const HorizontalInfiniteScroll = () => {
    return (
        <section class="scroll-section">
            <HorizontalScrollData timeInSeconds={"30s"} />
            <HorizontalScrollData timeInSeconds={"28s"} />
            <HorizontalScrollData timeInSeconds={"40s"} />
        </section>
        
    );
}
export default HorizontalInfiniteScroll;