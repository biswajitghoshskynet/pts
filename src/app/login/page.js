'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Page() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user !== '' && password !== '') {
            alert(`${user}, ${password}`)
        }
        else {
            if(user === ''){
                alert('Please enter user ID')
            }
            if(password === ''){
                alert('Please enter password')
            }
            
        }




    }
    return hasMounted && (
        <div className='d-flex align-items-center singleFold'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-sm-9 col-md-6 col-lg-5 col-xl-4'>
                        <div className='loginBox text-center'>
                            <div className='mb-4'>
                                <div className='mb-2'>
                                    <Image
                                        src="/img/logo.png"
                                        width={80}
                                        height={80}
                                        alt="logo"
                                    />
                                </div>
                                <h1 className='mb-05'>PTS</h1>
                                <h4 className='fw-medium'>System Login</h4>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit} className='mb-3'>
                                    <div className='formGroup'>
                                        <input type="text" id='user' name='user' className='form-control form-control-lg' placeholder='Login ID' value={user} onChange={(e) => { setUser(e.target.value) }} />
                                    </div>
                                    <div className='formGroup'>
                                        <input type="text" id='password' name='password' className='form-control form-control-lg' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </form>
                            </div>
                            <div className='text-center'><p className='mb-0'><small>Copyright © 2024 PTS*</small></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
