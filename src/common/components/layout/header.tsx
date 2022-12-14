import React from 'react'
// import styles from './Layout.module.scss'
interface HeaderProps {}

export const AppHeader: React.FC<HeaderProps> = ({}) => {
    return (
        <header className='flex items-center justify-center w-full p-4 text-gray-200 bg-blue-900 border-b h-14'>
             <span className='text-2xl font-bold'>DinDin</span>
        </header>      
    )
}