'use client'
import React from 'react'
import PatientSidebar from '@/components/PatientSidebar'
import PatientAdminHeader from '@/components/PatientAdminHeader'


export default function Page() {
    return (

        <>
            <PatientAdminHeader />
            <div className='patientInner d-flex gap-3 position-relative'>
                <PatientSidebar />
                <div className='patientInnerRight'>

                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Legal Form</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                </div>
                            </div>
                        </div>
                        <div className='cardBoxBody'>
                            Datatable goes here...
                        </div>
                    </div>


                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Legal Status</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                    <button className='btn btn-dark btn-sm'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='cardBoxBody'>
                        
                            Datatable goes here...
                        </div>
                    </div>



                </div>

            </div>
        </>

    )
}
