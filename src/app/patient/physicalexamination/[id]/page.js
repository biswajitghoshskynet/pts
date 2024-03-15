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
                                <div><h6 className="fw-semibold mb-0">Vitals</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                    <button className='btn btn-dark btn-sm'>Edit</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className='cardBoxBody'>
                            <p><small>(Note: BP Percentile calculations apply to age 4 years to 24 years, see help guide for copyright information)</small></p>
                            Datatable goes here...
                        </div>
                    </div>


                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Weight and Height Adults</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                    <button className='btn btn-dark btn-sm'>Edit</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
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
                                <div><h6 className="fw-semibold mb-0">Weight & Height - Children and Adolescents</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                    <button className='btn btn-dark btn-sm'>Edit</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className='cardBoxBody'>
                        <p><small>(Note: Percentile calculations apply to age 3 months to 20 years, see help guide for copyright information)</small></p>
                            Datatable goes here...
                        </div>
                    </div>

                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Head Circumference</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                    <button className='btn btn-dark btn-sm'>Edit</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className='cardBoxBody'>
                            <p><small>(Note: Percentile calculations apply to age 3 months to 5 years, see help guide for copyright information)</small></p>
                            Datatable goes here...
                        </div>
                    </div>

                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Full Physical Examination</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                    <button className='btn btn-dark btn-sm'>Edit</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
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
                                <div><h6 className="fw-semibold mb-0">Input-Output Chart</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>New</button>
                                    <button className='btn btn-dark btn-sm'>Edit</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
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
