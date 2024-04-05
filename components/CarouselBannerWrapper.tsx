import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import { CarouselsBanner } from "./CarouselsBanner";
type Props = {
    id?: string;
    keywords: string
}
export async function CarouselBannerWrapper({ id, keywords }: Props) {
    const movies = await getDiscoverMovies(id, keywords)
    return (
        <CarouselsBanner movies={movies} />
    )
}