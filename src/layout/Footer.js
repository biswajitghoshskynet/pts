'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  return pathname !== '/login' && (
    <>
    {console.log(pathname)}
      Foter
    </>
  )
}
