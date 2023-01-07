import React from "react"

import AnimatedLoader from "../AnimatedLoader";
import { CarouselWrapper } from "./index.style";

interface CarouselProps {
    items: any[]
    border?: string
}

function Carousel({
    items,
    border
}: CarouselProps) {
    return <CarouselWrapper border={border}>
        <AnimatedLoader />
    </CarouselWrapper>
}

export default Carousel;