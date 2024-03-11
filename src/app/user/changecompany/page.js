import React from 'react'
import Datatable from '@/components/Datatable'

export default function Page() {
    return (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Change Company</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <Datatable />
                </div>

            </div>

        </>
    )
}
