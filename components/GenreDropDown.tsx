import React from 'react'
import { Genres } from '@/typings';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const GenreDropDown = async () => {
    const url = 'https://api.themoviedb.org/3/genre/list?language=en-US';
    const options: RequestInit = {
        method: "Get",
        headers: {
            accept: "application/json",
            Authorization: `Bearer  ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    }
    const response = await fetch(url, options)
    const data = (await response.json()) as Genres
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='text-white flex justify-center items-center'>
                Genre <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {data.genres.map(genre =>
                    <DropdownMenuItem key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            {genre.name}

                        </Link>
                    </DropdownMenuItem>
                )}

            </DropdownMenuContent>
        </DropdownMenu>

    )
}
