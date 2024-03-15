'use client'
import React, { useState, useEffect } from 'react'
import PatientSidebar from '@/components/PatientSidebar'
import PatientAdminHeader from '@/components/PatientAdminHeader'


export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted && (

        <>
            <PatientAdminHeader />
            <div className='patientInner d-flex gap-3 position-relative'>
                <PatientSidebar />
                <div className='patientInnerRight'>
                    <div className='cardBox mb-2'>
                        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div><h6 className="fw-semibold mb-0">Risk Assessment</h6></div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button className='btn btn-dark btn-sm'>History</button>

                                </div>
                            </div>
                        </div>

                        <div className='cardBoxBody'>
                            <form action="">
                                <div className='mb-3'>
                                    <h4>HARM TO SELF</h4>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Recent or past suicidal attempts</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" for="inlineRadio1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Recent or past suicidal intent / plans without acting</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1" />
                                                <label className="form-check-label" for="inlineRadio3">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option2" />
                                                <label className="form-check-label" for="inlineRadio4">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Recent or past passive suicidal ideations </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option1" />
                                                <label className="form-check-label" for="inlineRadio5">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option2" />
                                                <label className="form-check-label" for="inlineRadio6">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Recent or past self-harm </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option1" />
                                                <label className="form-check-label" for="inlineRadio7">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option2" />
                                                <label className="form-check-label" for="inlineRadio8">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Harm through self-neglect </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option1" />
                                                <label className="form-check-label" for="inlineRadio9">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option2" />
                                                <label className="form-check-label" for="inlineRadio10">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <h4>HARM FROM OTHERS</h4>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Risk of emotional abuse</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa1" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa2" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa2">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Risk of neglect</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa3" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa3">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa4" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa4">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Risk of sexual abuse / exploitation </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa5" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa5">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa6" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa6">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Risk of physical abuse </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa7" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa7">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa8" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa8">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Risk of financial exploitation </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa9" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa9">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa10" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa10">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Risk of unlawful restriction/s </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioaa9" value="option1" />
                                                <label className="form-check-label" for="inlineRadioaa9">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioaa10" value="option2" />
                                                <label className="form-check-label" for="inlineRadioaa10">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='mb-3'>
                                    <h4>HARM TO OTHERS</h4>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Use of violence and aggression</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa1" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa2" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa2">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Arson, use of weapons, hostage taking, stalking</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa3" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa3">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa4" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa4">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Criminal offending</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa5" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa5">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa6" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa6">No</label>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className='mb-3'>
                                    <h4>RISK OF ACCIDENTS</h4>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Falls, driving, wandering, medication side effects</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa1" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa2" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <h4>FACTORS THAT INCREASE RISK</h4>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Substance use / medication abuse</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa1" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa2" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa2">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Non-compliance / absconding risk / refusing services</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa3" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa3">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa4" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa4">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Life events </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa5" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa5">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa6" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa6">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Mental state </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa7" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa7">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa8" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa8">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Lack of insight </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa9" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa9">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa10" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa10">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Family history of completed DSH, suicide</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioaa9" value="option1" />
                                                <label className="form-check-label" for="inlineRadioaa9">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioaa10" value="option2" />
                                                <label className="form-check-label" for="inlineRadioaa10">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <h4>RISK POTENTIAL</h4>
                                    <div className="mb-1 row">
                                        <label htmlFor="team" className="col-sm-4 col-form-label">Risk Optential</label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa1" value="option1" />
                                                <label className="form-check-label" for="inlineRadioa1">Low</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa2" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa2">Medium</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioa2" value="option2" />
                                                <label className="form-check-label" for="inlineRadioa2">High</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <h4>DESCRIPTIVE SUMMARY</h4>
                                    <div className="mb-2">
                                        <label htmlFor="team" className="col-form-label">If you have said YES to any of the above risk factors, please provide details here.</label>
                                        <textarea name="" id="" cols="30" rows="6" className='form-control'></textarea>
                                    </div>

                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">Date & Time</label>
                                        <div className="col-sm-10">
                                            <input type="date" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="mb-3 row align-items-center">
                                        <label htmlFor="team" className="col-sm-2 col-form-label">NAME OF CLINICIAN</label>
                                        <div className="col-sm-10">
                                            <input type="text" className='form-control' />
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

                </div>

            </div>
        </>

    )
}
