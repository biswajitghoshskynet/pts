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
                                <div><h6 className="fw-semibold mb-0">Patient Dashboard</h6></div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <div className="d-flex text-center gap-2 justify-content-between flex-wrap flex-md-nowrap">
                                <div className="countBox flex-fill">
                                    <p className="mb-1"><span className="material-symbols-outlined smallIcon">event</span> Registration Date</p>
                                    <h6 className="mb-0 text-dark">07 Oct,2022</h6>
                                </div>

                                <div className="countBox flex-fill">
                                    <p className="mb-1"><span className="material-symbols-outlined smallIcon">checklist</span> Total Appt.</p>
                                    <h6 className="mb-0 text-dark">9</h6>
                                </div>

                                <div className="countBox flex-fill">
                                    <p className="mb-1"><span className="material-symbols-outlined smallIcon">perm_contact_calendar</span> Last Seen</p>
                                    <h6 className="mb-0 text-dark">17</h6>
                                </div>

                                <div className="countBox flex-fill">
                                    <p className="mb-1"><span className="material-symbols-outlined smallIcon">pending_actions</span> Next Appt.</p>
                                    <h6 className="mb-0 text-dark">27 Dec,2022</h6>
                                </div>

                                <div className="countBox flex-fill">
                                    <p className="mb-1"><span className="material-symbols-outlined smallIcon">rule</span> Attended / Not Attended</p>
                                    <h6 className="mb-0 text-dark">15/0</h6>
                                </div>
                                <div className="countBox flex-fill">
                                    <p className="mb-1"><span className="material-symbols-outlined smallIcon">event_busy</span> Cancellations</p>
                                    <h6 className="mb-0 text-dark">0</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Legal Status</h6></div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            Datatable goes here...
                        </div>

                    </div>
                    <div className='cardBox'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Outcome Measures</h6></div>
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
