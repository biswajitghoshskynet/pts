'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return pathname !== '/login' && (
    <>
      Header
    </>
  )
}
