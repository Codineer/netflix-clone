import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SearchInput } from './SearchInput'
import { ThemeToggler } from './ThemeToggle'
export const Header = () => {
    return (
        <header className='fixed top-0 w-full z-20 items-center flex justify-between p-5 bg-gradient-to-b from-gray-900  via-gray-100/0'>
            <Link href={"/"} className='mr-10'>
                <Image src='https://links.papareact.com/a943ae'
                    width={120}
                    height={100}
                    alt="LunaticWatch"
                    className='cursor-pointer invert-0 dark:invert'
                />
            </Link>
            <div className='flex space-x-2'>
                {/*genre dropdown*/}
                <SearchInput />
                <ThemeToggler />
            </div>

        </header>
    )
}
