'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PatientSidebar() {
    const pathname = usePathname()
   
    return (
        <>
    
            <div className='subSideBar'>
                <div className='subSideBarContent'>
                    <ul className="">
                        <li className={`${pathname === "/patient/dashboard/MTMxMA==" ? 'active' : ''}`}>
                            <Link href="/patient/dashboard/MTMxMA==">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/patient/demographics/MTMxMA==">Demographics</Link>
                        </li>
                        <li>
                            <Link href="/patient/consenttoshare/MTMxMA==">Consent to share</Link>
                        </li>
                        <li>
                            <Link href="/patient/assessmentsummary/MTMxMA==">Assessment Summary</Link>
                        </li>
                        <li>
                            <Link href="/patient/riskaassessment/MTMxMA==">Risk Assessment</Link>
                        </li>
                        <li>
                            <Link href="/patient/physicalexamination/MTMxMA==">Physical Examination</Link>
                        </li>
                        <li>
                            <Link href="/patient/clinicalcoding/MTMxMA==">Clinical Coding</Link>
                        </li>
                        <li>
                            <Link href="/patient/patientnotes/MTMxMA==">Patient Notes</Link>
                        </li>
                        <li>
                            <Link href="/patient/medication/MTMxMA==">Prescribe Medication</Link>
                        </li>
                        <li>
                            <Link href="/patient/careplan/MTMxMA==">Care Plan</Link>
                        </li>
                        <li>
                            <Link href="/patient/outcomemeasures/MTMxMA==">Outcome Measures</Link>
                        </li>
                        <li>
                            <Link href="/patient/documentation/MTMxMA==">Documentation</Link>
                        </li>
                        <li>
                            <Link href="/patient/investigation/MTMxMA==">Investigations</Link>
                        </li>
                        <li>
                            <Link href="/patient/legalstatus/MTMxMA==">Legal Status</Link>
                        </li>
                        <li>
                            <Link href="/patient/inouttracking/MTMxMA==">In / Out Tracking</Link>
                        </li>
                        <li>
                            <Link href="/patient/pdffiles/MTMxMA==">PDF Files</Link>
                        </li>
                        <li>
                            <Link href="/patient/letters/MTMxMA==">Letters</Link>
                        </li>
                        <li>
                            <Link href="/patient/discharge/MTMxMA==">Discharge</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
