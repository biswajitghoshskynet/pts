'use client'
import React from 'react'
import Select from 'react-select'

export default function Page() {
    const roleOptions = [
        { value: 'Adfecta Ltd', label: 'Adfecta Ltd' },
        { value: 'Grow and Thrive Limited', label: 'Grow and Thrive Limited' },
        { value: 'info@piamenzies', label: 'info@piamenzies' }
    ]
    return (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Role Listing</h6></div>

                        <div className='d-flex align-items-center gap-2'>
                            <div className='cardBoxTitleMid'><Select options={roleOptions} /></div>
                            <div><button type='button' className='btn btn-sm btn-dark'>Add</button></div>
                        </div>
                    </div>
                </div>
                <div>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Role Name</th>
                                <th width='90' className='text-center'>Edit</th>
                                <th width='90' className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Administrator</td>
                                <td className='text-center'><span className="material-symbols-outlined smallIcon text-primary">edit_square</span></td>
                                <td className='text-center'><span className="material-symbols-outlined smallIcon text-danger">delete_forever</span></td>
                            </tr>
                            <tr>
                                <td>Clinician</td>
                                <td className='text-center'><span className="material-symbols-outlined smallIcon text-primary">edit_square</span></td>
                                <td className='text-center'><span className="material-symbols-outlined smallIcon text-danger">delete_forever</span></td>
                            </tr>
                            <tr>
                                <td>Nurse</td>
                                <td className='text-center'><span className="material-symbols-outlined smallIcon text-primary">edit_square</span></td>
                                <td className='text-center'><span className="material-symbols-outlined smallIcon text-danger">delete_forever</span></td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
