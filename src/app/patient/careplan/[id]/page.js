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
                                <div><h6 className="fw-semibold mb-0">Care Plan / Medication <span className='badge text-bg-light'>as on 15 Mar, 2024 13:53</span></h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-dark btn-sm'>History</button>

                                </div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <form action="">
                                <div className='mb-3'>
                                    <h4 className='mb-05'>GOALS AND PLANS TO ACHIEVE THE SAME</h4>
                                    <p className='mb-3'><small>Include – therapy goals, education, employment, recreation, financial management etc.
                                    </small></p>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-1 col-form-label">1.</label>
                                        <div className="col-sm-9 col-md-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                        <div className="col-sm-2 col-md-1"><button><span className="material-symbols-outlined text-success">add_box</span></button></div>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <h4 className='mb-2'>MEDICATION</h4>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-1 col-form-label">1.</label>
                                        <div className="col-sm-9 col-md-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                        <div className="col-sm-2 col-md-1"><button><span className="material-symbols-outlined text-success">add_box</span></button></div>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <h4 className='mb-2'>CRISIS AND RISK MANAGEMENT</h4>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-1 col-form-label">1.</label>
                                        <div className="col-sm-9 col-md-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                        <div className="col-sm-2 col-md-1"><button><span className="material-symbols-outlined text-success">add_box</span></button></div>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <h4 className='mb-2'>RELAPSE INDICATORS</h4>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-1 col-form-label">1.</label>
                                        <div className="col-sm-9 col-md-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                        <div className="col-sm-2 col-md-1"><button><span className="material-symbols-outlined text-success">add_box</span></button></div>
                                    </div>
                                </div>


                                <div className='d-flex gap-1 justify-content-end'>
                                    <button className='btn btn-sm btn-success'>Add</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}
