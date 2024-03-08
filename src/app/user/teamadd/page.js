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
                        <div><h6 className="fw-semibold mb-0">Add Team</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <form action="">
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="team" className="col-sm-2 col-form-label">Team Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="team"/>
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
