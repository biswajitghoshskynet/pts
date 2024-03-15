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
                        <div className="cardBoxTitle bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Patient Discharge</h6></div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <form action="">
                                <div className='mb-3'>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Patient Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Clinician Name</label>
                                        <div className="col-sm-10">
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Discharge Date</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Reasons for Discharge</label>
                                        <div className="col-sm-10">
                                            <select className="form-control"  id="reasons" name="reasons" >
                                                <option value="">Select Reasons</option>
                                                <option value="Did Not Attend">Did Not Attend</option>
                                                <option value="Against Medical Advice">Against Medical Advice</option>
                                                <option value="Transfer to another provider">Transfer to another provider</option>
                                                <option value="Treatment Completed">Treatment Completed</option>
                                                <option value="Back in care of GP">Back in care of GP</option>
                                                <option value="Relocation">Relocation</option>
                                                <option value="Absconding / Missing">Absconding / Missing</option>
                                                <option value="Referral not accepted - Inappropriate Service">Referral not accepted - Inappropriate Service</option>
                                                <option value="Referral not accepted - Inadequate information">Referral not accepted - Inadequate information</option>
                                                <option value="Referral not accepted - Active Safeguarding Concerns">Referral not accepted - Active Safeguarding Concerns</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Discharge Summary</label>
                                        <div className="col-sm-10">
                                            <textarea name="" id="" cols="30" rows="6" className='form-control' ></textarea>
                                        </div>
                                    </div>


                                </div>


                                <div className='d-flex gap-1 justify-content-end'>
                                    <button className='btn btn-sm btn-dark'>Back</button>
                                    <button className='btn btn-sm btn-success'>Discharge</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}
