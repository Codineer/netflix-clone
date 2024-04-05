'use client'
import { Movie } from '@/typings'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
Autoplay.globalOptions = { delay: 2000 }
import Image from 'next/image'
import getImagePath from '@/lib/getImagePath'
export const CarouselsBanner = ({ movies }: { movies: Movie[] }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()])

    return (
        <div className='overflow-hidden lg:-mt-40 relative cursor-pointer ' ref={emblaRef}>
            <div className='flex '>
                {movies.map(movie => (
                    <div key={movie.id} className='flex-[0_0_100%] min-w-0 relative'>
                        <Image

                            src={getImagePath(movie.backdrop_path, true)}
                            alt={movie.title}
                            width={1920}
                            height={1000}
                            key={movie.id}
                        />
                        <div className='hidden md:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20  h-full w-full bg-gradient-to-r from-slate-900/90 via-transparent to-transparent p-10 space-y-10 text-white'>
                            <h2 className='text-5xl font-bold max-w-xl z-50'>{movie.title}</h2>
                            <p className='max-w-xl line-clamp-3'>{movie.overview}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]' />
        </div>
    )
}
