import React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

interface HeaderProps {}

export const Navbar: React.FC<HeaderProps> = ({}) => <Header className='navbar'>Reservation App</Header>