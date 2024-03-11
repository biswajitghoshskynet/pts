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
                        <div><h6 className="fw-semibold mb-0">Paypal Details</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <form action="">
                        <div className='mb-3'>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Sandbox Endpoint</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Sandbox Username</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Sandbox Password</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Sandbox Signature</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Sandbox Checkout Url</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <hr />
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Live Endpoint</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Live Username</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Live Password</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Live Signature</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Live Checkout Url</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <hr />
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Version</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="team" />
                                </div>
                            </div>
                            <div className="mb-1 row align-items-center">
                                <label htmlFor="team" className="col-sm-2 col-form-label">Live</label>
                                <div className="col-sm-10">
                                
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                            
                                    
                                </div>
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
