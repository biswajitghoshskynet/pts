'use client'
import React from 'react'
import Select from 'react-select'
import ExpandCollapse from '@/components/ExpandCollapse'

export default function Page() {
    const userOptions = [
        { value: 'Sourav Majumdar( Clinician )', label: 'Sourav Majumdar( Clinician )' },
        { value: 'Manjiri Lele(  )', label: 'Manjiri Lele(  )' }
    ]
    const companyOptions = [
        { value: 'Adfecta Ltd', label: 'Adfecta Ltd' },
        { value: 'Grow and Thrive Limited', label: 'Grow and Thrive Limited' },
        { value: 'info@piamenzies', label: 'info@piamenzies' }
    ]
    return (
        <>

            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Menu User Listing</h6></div>

                        <div className='d-flex align-items-center gap-2'>
                            <div className='cardBoxTitleMid'><Select options={userOptions} /></div>
                            <div className='cardBoxTitleMid'><Select options={companyOptions} /></div>

                        </div>
                    </div>
                </div>

                <div className='cardBoxBody'>

                    <div className='row gx-3'>
                        <div className='col-sm-6 col-md-6 col-lg-4 mb-2'><ExpandCollapse /></div>
                        <div className='col-sm-6 col-md-6 col-lg-4 mb-2'><ExpandCollapse /></div>
                        <div className='col-sm-6 col-md-6 col-lg-4 mb-2'><ExpandCollapse /></div>
                        <div className='col-sm-6 col-md-6 col-lg-4 mb-2'><ExpandCollapse /></div>
                    </div>

                </div>
            </div>
        </>
    )
}
