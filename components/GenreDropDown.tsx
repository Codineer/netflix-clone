import React from 'react'

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
    const data = ()
    return (
        <div>GenreDropDown</div>
    )
}
