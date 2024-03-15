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
                                <div><h6 className="fw-semibold mb-0">Assessment Summary</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-dark btn-sm'>History</button>

                                </div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <form action="">
                                <div className='mb-3'>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Date Of Birth</label>
                                        <div className="col-sm-10">
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Address</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">GP</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Referred by</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Ragistration Date</label>
                                        <div className="col-sm-10">
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Clinician</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Assessment Date</label>
                                        <div className="col-sm-10">
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Reasons for referral</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">History of presenting problems</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Current or previous interventions</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Family history / dynamics</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Social history and current circumstances</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Personal History (lifestyle factors / temperament / personality traits)</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Developmental History</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Educational / Employment history</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Medical History</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Physical Examination</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Mental State Exam / other observations</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">Formulation / executive summary</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>

                                </div>







                                <div className='d-flex gap-1 justify-content-end'>
                                    <button className='btn btn-sm btn-dark'>Back</button>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}
