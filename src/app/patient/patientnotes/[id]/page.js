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
                                <div><h6 className="fw-semibold mb-0">Patient Notes</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-success btn-sm'>Add new</button>
                                    <button className='btn btn-dark btn-sm'>Search</button>
                                    <button className='btn btn-dark btn-sm'>History</button>

                                </div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <form action="">
                                <div className='mb-3'>
                                   
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Select type of entry:</label>
                                        <div className="col-sm-10">
                                            <select name="" id="" className='form-control'>
                                                <option value="CPA Minutes &amp; Summary">CPA Minutes &amp; Summary</option>
                                                <option value="MDT Meeting">MDT Meeting</option>
                                                <option value="Medication review">Medication review</option>
                                                <option value="Other">Other</option>
                                                <option value="Risk Information">Risk Information</option>
                                                <option value="Therapy session">Therapy session</option>
                                                <option value="Third Party">Third Party</option>
                                                <option value="Ward Rounds">Ward Rounds</option>
                                                <option value="Initial Assessment">Initial Assessment</option>
                                                <option value="Admin Entry">Admin Entry</option>
                                                <option value="Follow-Up Summary">Follow-Up Summary</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Notes</label>
                                        <div className="col-sm-10">
                                            <textarea name="" id="" cols="30" rows="6" className='form-control' ></textarea>
                                        </div>
                                    </div>


                                </div>


                                <div className='d-flex gap-1 justify-content-end'>
                                    <button className='btn btn-sm btn-dark'>Back</button>
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
