'use client'
import React, { useState, useEffect } from 'react'
import PatientSidebar from '@/components/PatientSidebar'
import PatientAdminHeader from '@/components/PatientAdminHeader'


export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);


    const handleTab = (e) => {
        const tabLink = document.querySelectorAll('.tabLinks ul li')
        const tabContainer = document.querySelectorAll('.tabContent')
     
        tabContainer.forEach(item => {
            if (e.target.getAttribute('data-tab') === item.id) {
                item.style.display = "block"

                tabLink.forEach(tabLink => {
                    tabLink.className = ''
                });
                e.target.className = "active"
            }
            else {
                item.style.display = "none"

            }
        });
    }



    return hasMounted && (

        <>

            <PatientAdminHeader />
            <div className='patientInner d-flex gap-3 position-relative'>
                <PatientSidebar />
                <div className='patientInnerRight'>

                    <div className='tabHold'>
                        <div className='tabLinks'>
                            <ul>
                                <li data-tab="tab1" className='active' onClick={handleTab}>Outpatient Medication</li>
                                <li data-tab="tab2" onClick={handleTab}>Inpatient Medication chart</li>
                                <li data-tab="tab3" onClick={handleTab}>Alerts and Consent</li>
                                <li data-tab="tab4" onClick={handleTab}>ECT record</li>
                            </ul>
                            <div className='tabContent' id='tab1' style={{ display: 'block' }}>

                                <div className='cardBox mb-2'>
                                    <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div><h6 className="fw-semibold mb-0">Outpatient Medication</h6></div>
                                            <div className='d-flex align-items-center gap-1'>
                                                <button className='btn btn-success btn-sm'>New</button>
                                                <button className='btn btn-dark btn-sm'>Edit</button>
                                                <button className='btn btn-danger btn-sm'>Delete</button>
                                                <button className='btn btn-primary btn-sm'>History</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cardBoxBody'>
                                        Datatable goes here...
                                    </div>
                                </div>
                            </div>
                            <div className='tabContent' id='tab2'>
                                <div className='cardBox mb-2'>
                                    <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div><h6 className="fw-semibold mb-0">Inpatient Medication chart</h6></div>
                                            <div className='d-flex align-items-center gap-1'>
                                                <button className='btn btn-success btn-sm'>Add Medication (REGULAR)</button>
                                                <button className='btn btn-success btn-sm'>Add Medication (VARIABLE)</button>
                                                <button className='btn btn-primary btn-sm'>History</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cardBoxBody'>
                                        Datatable goes here...
                                    </div>
                                </div>
                            </div>
                            <div className='tabContent' id='tab3'>

                                <div className='cardBox mb-2'>
                                    <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div><h6 className="fw-semibold mb-0">Alerts and Consent</h6></div>
                                            <div className='d-flex align-items-center gap-1'>
                                                <button className='btn btn-primary btn-sm'>History</button>
                                            </div>
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
                                                    <label htmlFor="team" className="col-sm-2 col-form-label">Date Of Birth</label>
                                                    <div className="col-sm-10">
                                                        <input type="date" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="mb-1 row align-items-center">
                                                    <label htmlFor="team" className="col-sm-2 col-form-label">Allergies</label>
                                                    <div className="col-sm-10">
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
                                                <div className="mb-1 row align-items-center">
                                                    <label htmlFor="team" className="col-sm-2 col-form-label">Patient Pregnant?</label>
                                                    <div className="col-sm-10">
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
                                                <div className="mb-1 row align-items-center">
                                                    <label htmlFor="team" className="col-sm-2 col-form-label">Medication information</label>
                                                    <div className="col-sm-10">
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
                                                <div className="mb-1 row align-items-center">
                                                    <label htmlFor="team" className="col-sm-2 col-form-label">Patient / parent consent</label>
                                                    <div className="col-sm-10">
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

                                                


                                                <div className="mb-1 row ">
                                                    <label htmlFor="team" className="col-sm-2 col-form-label">Comments</label>
                                                    <div className="col-sm-10">
                                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                                    </div>
                                                </div>
                                                
                                               
                                            </div>
                                            <div className='d-flex gap-1 justify-content-end'>
                                                <button className='btn btn-sm btn-success'>Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='tabContent' id='tab4'>
                                <div className='cardBox mb-2'>
                                    <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div><h6 className="fw-semibold mb-0">ECT record</h6></div>
                                            <div className='d-flex align-items-center gap-1'>
                                                <button className='btn btn-success btn-sm'>New</button>
                                                <button className='btn btn-dark btn-sm'>Edit</button>
                                                <button className='btn btn-danger btn-sm'>Delete</button>
                                                <button className='btn btn-primary btn-sm'>History</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cardBoxBody'>

                                        Datatable goes here...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </>

    )
}
