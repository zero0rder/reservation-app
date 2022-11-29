import React from 'react'
// import styles from './Layout.module.scss'
interface HeaderProps {}

export const AppHeader: React.FC<HeaderProps> = ({}) => {
    return (
        <header className='flex justify-center items-center w-full h-14 border-b p-4'>
             <span className='font-bold text-2xl'>DinDin</span>
        </header>      
    )
}