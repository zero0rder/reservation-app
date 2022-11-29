import React from 'react'
// import styles from './Layout.module.scss'
interface HeaderProps {}

export const AppHeader: React.FC<HeaderProps> = ({}) => {
    return (
        <header className='flex justify-center items-center w-full h-14 border-b'>
             <span className='font-bold'>DinDin</span>
        </header>      
    )
}