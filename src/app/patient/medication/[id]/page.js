'use client'
import React, { useState, useEffect } from 'react'
import PatientSidebar from '@/components/PatientSidebar'
import PatientAdminHeader from '@/components/PatientAdminHeader'


export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);



    


    return hasMounted &&  (

        <>
          
            <PatientAdminHeader />
            <div className='patientInner d-flex gap-3 position-relative'>
                <PatientSidebar />
                <div className='patientInnerRight'>

                    <div className='tabHold'>
                        <div className='tabLinks'>
                            <ul>
                                <li data-tab="tab1" className='active'>Outpatient Medication</li>
                                <li data-tab="tab2">Inpatient Medication chart</li>
                                <li data-tab="tab3">Alerts and Consent</li>
                                <li data-tab="tab4">ECT record</li>
                            </ul>
                            <div className='tabContent' id='tab1' style={{ display: 'block' }}>tab1</div>
                            <div className='tabContent' id='tab2'>tab2</div>
                            <div className='tabContent' id='tab3'>tab3</div>
                            <div className='tabContent' id='tab4'>tab4</div>
                        </div>
                    </div>

                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">ECT record</h6></div>
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
