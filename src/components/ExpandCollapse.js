'use client'
import React, { useState } from 'react'


export default function ExpandCollapse() {
    const [display, setDisplay] = useState(false)
    const [style, setStyle] = useState({
        display: 'none'
    })
    const [arrow, setArrow] = useState('expand_more')


    const handleDisplay = () => {
        if (display === false) {
            setDisplay(true)
            setStyle({ display: 'block' })
            setArrow('expand_less')
        }
        else {
            setDisplay(false)
            setStyle({ display: 'none' })
            setArrow('expand_more')
        }
    }


    return (
        <>
            <div className='cardBox'>
                <div className='cardBoxTitle bg-light'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <div className="form-check h5 mb-0">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Home
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className='expendIcon' onClick={handleDisplay}><span className="material-symbols-outlined">{arrow}</span></div>
                        </div>
                    </div>
                </div>

                <div className='cardBoxBody' style={style}>
                    <ul className='checkboxList'>
                        <li>
                            <div className="form-check mb-05">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                    Dashboard
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check mb-05">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                <label className="form-check-label" htmlFor="flexCheckDefault3">
                                    Dashboard
                                </label>
                            </div>
                            <ul>
                                <li>
                                    <div className="form-check mb-05">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault3">
                                            Sub
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="form-check mb-05">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                <label className="form-check-label" htmlFor="flexCheckDefault4">
                                    Dashboard
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
