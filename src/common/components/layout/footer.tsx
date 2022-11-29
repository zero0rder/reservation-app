import React from 'react'
import { MdCopyright } from 'react-icons/md'
// import styles from './Layout.module.scss'
interface FooterProps {}

export const AppFooter: React.FC<FooterProps> = ({}) => {
    return (
        <footer className='flex justify-center items-center w-full h-15 md:h-20 border-t flex-col p-2 md:p-4 text-sm'>
             <p className='flex justify-center items-center font-bold'>DinDin App</p>
            <span className='italic'>All Rights Reserved <MdCopyright className='inline mb-[0.1rem]'/> {new Date().getFullYear()}</span>
        </footer>
    )
}