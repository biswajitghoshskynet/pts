'use client'
import React from 'react'
import Header from '@/layout/Header'
import Sidebar from '@/layout/Sidebar'
import Footer from '@/layout/Footer'
import { usePathname } from 'next/navigation'

export default function Layoutauth(props) {
    const pathname = usePathname()
    return (
        <>
            {pathname !== '/login' ?
                <div className='d-flex'>
                    <Sidebar />
                    <div className='bodyRight'>
                        <Header />
                        <div className='mainContent'>
                           <div className='container-fluid'>{props.data}</div> 
                        </div>
                        <Footer />
                    </div>
                </div>
                : props.data}



        </>
    )
}
