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
                <div className="cardBoxTitle bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Manage Reports</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <form action="">
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Select A Report</label>
                            <div className="col-sm-10">
                                <select className='form-control'>
                                    <option value="">Select A Report</option>
                                    <option value="Activity data Team Wise">Activity data Team Wise</option>
                                    <option value="Outcome measures wise">Outcome measures wise</option>
                                    <option value="Team Wise">Team Wise</option>
                                    <option value="Clinician Wise">Clinician Wise</option>
                                    <option value="Activity data Clinician Wise">Activity data Clinician Wise</option>

                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-md-4'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check1" />
                                    <label className="form-check-label" htmlFor="check1">
                                    Sr. No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check2" />
                                    <label className="form-check-label" htmlFor="check2">
                                    Gender
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check3" />
                                    <label className="form-check-label" htmlFor="check3">
                                    Each appointment duration
                                    </label>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check4" />
                                    <label className="form-check-label" htmlFor="check4">
                                    Patient ID
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check5" />
                                    <label className="form-check-label" htmlFor="check5">
                                    Date of each appointment
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check6" />
                                    <label className="form-check-label" htmlFor="check6">
                                    Each appointment time started
                                    </label>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check7" />
                                    <label className="form-check-label" htmlFor="check7">
                                    Full Name
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check8" />
                                    <label className="form-check-label" htmlFor="check8">
                                    Each appointment outcome
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check9" />
                                    <label className="form-check-label" htmlFor="check9">
                                    Each appointment time ended
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex gap-1 justify-content-end'>
                            <button className='btn btn-sm btn-dark'>Update</button>
                            <button className='btn btn-sm btn-success'>Update And View Reports</button>
                        </div>
                    </form>

                   
                </div>

            </div>

        </>
    )
}
