import React from 'react'
import Datatable from '@/components/Datatable'

export default function Page() {
    return (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Quick Patient Registration</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <form action="">
                        <div className="mb-1 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="team" />
                            </div>
                        </div>
                        <div className="mb-1 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="team" />
                            </div>
                        </div>
                        <div className="mb-1 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Gender</label>
                            <div className="col-sm-10">
                                <select className='form-control'>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                      
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Date Of Birth</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="team" />
                            </div>
                        </div>
                       

                        <div className='d-flex gap-1 justify-content-end'>
                            <button className='btn btn-sm btn-dark'>Back</button>
                            <button className='btn btn-sm btn-success'>Update</button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}
