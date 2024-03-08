import React from 'react'
import Datatable from '@/components/Datatable'

export default function Page() {
    return (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Template Listing</h6></div>

                        <div className='d-flex align-items-center gap-2'>
                            <button className='btn btn-sm btn-dark'>Add</button>

                        </div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <Datatable />
                </div>

            </div>

        </>
    )
}
