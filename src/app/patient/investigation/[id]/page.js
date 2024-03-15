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
                        <div className="cardBoxTitle  bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Investigations</h6></div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <form action="">
                                <div className='mb-3'>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Upload relevant documents</label>
                                        <div className="col-sm-10">
                                            <input type="file" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">File Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Comments</label>
                                        <div className="col-sm-10">
                                            <textarea name="" id="" cols="30" rows="6" className='form-control' ></textarea>
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
