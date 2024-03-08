import React from 'react'

export default function Page() {
    return (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Menu Listing</h6></div>
                        <div><button type='button' className='btn btn-sm btn-dark'>Add</button></div>
                    </div>
                </div>
                <div>
                    <div className="cardBoxBody">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th width='200'>Menu name</th>
                                    <th>Submenu item</th>
                                    <th>Url</th>
                                    <th width='90'>Left menu</th>
                                    <th width='90' className='text-center'>Edit</th>
                                    <th width='90' className='text-center'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Home</td>
                                    <td></td>
                                    <td>#</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td className='text-center'><span className="material-symbols-outlined smallIcon text-primary">edit_square</span></td>
                                    <td className='text-center'><span className="material-symbols-outlined smallIcon text-danger">delete_forever</span></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Dashboard</td>
                                    <td>/</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td className='text-center'><span className="material-symbols-outlined smallIcon text-primary">edit_square</span></td>
                                    <td className='text-center'><span className="material-symbols-outlined smallIcon text-danger">delete_forever</span></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Payment info</td>
                                    <td>/paymentinfo</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </td>
                                    <td className='text-center'><span className="material-symbols-outlined smallIcon text-primary">edit_square</span></td>
                                    <td className='text-center'><span className="material-symbols-outlined smallIcon text-danger">delete_forever</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </>
    )
}
