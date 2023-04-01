import { placeholderItems } from "../../@context/_constants";
import React, { useEffect, useState } from "react"

import AnimatedLoader from "../AnimatedLoader";
import { CarouselContent, CarouselWrapper } from "./index.style";

interface CarouselProps {
    items: any[]
    border?: string
    maxWidth?: string
    maxHeight?: string
}

function Carousel({
    items,
    border,
    maxWidth,
    maxHeight
}: CarouselProps) {
    const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>();

    const changeIdx = (mode: 'forward' | 'back') => {
        setLoading(true);
        setCurrentImageIdx(
            (mode == 'forward' && currentImageIdx < placeholderItems.length - 1) ? 
                currentImageIdx + 1 
            : (mode == 'forward' && currentImageIdx == placeholderItems.length - 1) ?
                0
            : (mode == 'back' && currentImageIdx > 0) ? 
            currentImageIdx - 1 
            : (mode == 'back' && currentImageIdx == 0) &&
            placeholderItems.length - 1
        );
    }

    const endLoading = (e: any) => {
        setLoading(false);
    }

    // useEffect(() => {
    //     console.log(loading);
    // }, [loading])

    return <CarouselWrapper 
        border={border} 
        maxWidth={maxWidth} 
        maxHeight={maxHeight}
    >
        {/* {loading ? 
            <AnimatedLoader /> 
        : ( */}
            <CarouselContent maxHeight={maxHeight} maxWidth={maxWidth}>
                <button className="arrowButton" onClick={() => changeIdx('back')}><img src="leftArrow.png"/></button>
                <img 
                    className="carouselImage" 
                    src={`${placeholderItems[currentImageIdx]}`} 
                    onLoad={(e) => endLoading(e)} 
                />
                <button className="arrowButton" onClick={() => changeIdx('forward')}><img src="rightArrow.png"/></button>
            </CarouselContent>
        {/* )} */}
    </CarouselWrapper>
}

export default Carousel;