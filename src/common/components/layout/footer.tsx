import React from 'react'
// import styles from './Layout.module.scss'
interface FooterProps {}

export const AppFooter: React.FC<FooterProps> = ({}) => {
    return (
        <footer className='flex justify-center items-center w-full h-20 border-t'>
             <p className='flex justify-center items-center'>DinDin App</p>
        </footer>
    )
}