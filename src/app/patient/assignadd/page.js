'use client'
import React, { useState, useEffect } from 'react'


export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted && (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Assign Patient To Clinician</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <form action="">
                        <div className="mb-1 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Patient Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="team" />
                            </div>
                        </div>
                        <div className="mb-1 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Select Team</label>
                            <div className="col-sm-10">
                                <select className='form-control'>
                                    <option value="Pritam team">Pritam team</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Team Member Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="team" />
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
