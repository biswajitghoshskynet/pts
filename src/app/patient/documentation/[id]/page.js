'use client'
import React, { useState, useEffect } from 'react'
import PatientSidebar from '@/components/PatientSidebar'
import PatientAdminHeader from '@/components/PatientAdminHeader'


export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted && (

        <>
            <PatientAdminHeader />
            <div className='patientInner d-flex gap-3 position-relative'>
                <PatientSidebar />
                <div className='patientInnerRight'>
                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Clinical Coding</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-dark btn-sm'>History</button>

                                </div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <form action="">
                                <div className='mb-3'>
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Documentation</label>
                                        <div className="col-sm-10">
                                            <input type="file" className='form-control' />
                                        </div>
                                    </div>

                                    <div className='d-flex gap-1 justify-content-end'>
                                        <button className='btn btn-sm btn-success'>Submit</button>
                                    </div>

                                </div>
                            </form>

                            <div>
                                Datatable goes here...
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}
