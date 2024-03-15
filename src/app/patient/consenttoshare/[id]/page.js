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
                                <div><h6 className="fw-semibold mb-0">Consent To Share</h6></div>
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
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Registration Date</label>
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
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Date and Time from amended</label>
                                        <div className="col-sm-10">
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-5 col-form-label">Have you explained client the concept, statutory rights and limits of consent to share information </label>
                                        <div className="col-sm-7">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Consent summary</label>
                                        <div className="col-sm-10">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1" />
                                                <label className="form-check-label" htmlFor="inlineRadio3">Consent to share without restrictions</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option2" />
                                                <label className="form-check-label" htmlFor="inlineRadio4">Consent to share with some restrictions</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option2" />
                                                <label className="form-check-label" htmlFor="inlineRadio5">Consent to share withheld</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-1 row ">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Add details below</label>
                                        <div className="col-sm-10">
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>AGENCY</th>
                                                    <th>WORKER</th>
                                                    <th>PERMSSION TO CONTACT</th>
                                                    <th>ADD / DELETE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="text" className='form-control' /></td>
                                                    <td><input type="text" className='form-control' /></td>
                                                    <td>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option1" />
                                                            <label className="form-check-label" htmlFor="inlineRadio9">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option2" />
                                                            <label className="form-check-label" htmlFor="inlineRadio8">No</label>
                                                        </div>
                                                    </td>
                                                    <td><button type='button'><span className="material-symbols-outlined">library_add</span></button></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-1 row ">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Comment</label>
                                        <div className="col-sm-10">
                                            <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                        </div>
                                    </div>
                                    <div className="mb-1 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Patient Name</label>
                                        <div className="col-sm-10">
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Signature</label>
                                        <div className="col-sm-10">
                                            <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                        </div>
                                    </div>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Electronic validation</label>
                                        <div className="col-sm-10">
                                            <div className='mb-05'>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <p className='mb-0'><small>SEND COPY OF ABOVE BY EMAIL, CLIENT CLICKS ACCEPT TO SIGN-OFF OR PRINT COPY AND UPLOAD DOCUMENT</small></p>
                                        </div>
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
