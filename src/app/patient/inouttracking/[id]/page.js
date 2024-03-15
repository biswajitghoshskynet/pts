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
                                <li data-tab="tab1" className='active' onClick={handleTab}>Out Link</li>
                                <li data-tab="tab2" onClick={handleTab}>In Link</li>
                            </ul>
                            <div className='tabContent' id='tab1' style={{ display: 'block' }}>

                                <div className='cardBox mb-2'>
                                    <div className="cardBoxTitle  bg-light">
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div><h6 className="fw-semibold mb-0">Out Link</h6></div>
                                            
                                        </div>
                                    </div>
                                    <div className='cardBoxBody'>
                                        Datatable goes here...
                                    </div>
                                </div>
                            </div>
                            <div className='tabContent' id='tab2'>
                                <div className='cardBox mb-2'>
                                    <div className="cardBoxTitle  bg-light">
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div><h6 className="fw-semibold mb-0">In Link</h6></div>
                                            
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
