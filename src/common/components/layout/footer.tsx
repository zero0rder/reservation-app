import React from 'react'
import { MdCopyright } from 'react-icons/md'
// import styles from './Layout.module.scss'
interface FooterProps {}

export const AppFooter: React.FC<FooterProps> = ({}) => {
    return (
        <footer className='flex flex-col items-center justify-center w-full p-2 text-sm text-gray-200 bg-blue-900 border-t h-15 md:h-20 md:p-4'>
             <p className='flex items-center justify-center font-bold'>DinDin App</p>
            <span className='italic'>All Rights Reserved <MdCopyright className='inline mb-[0.1rem]'/> {new Date().getFullYear()}</span>
        </footer>
    )
}