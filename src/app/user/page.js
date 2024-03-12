'use client'
import React, { useState, useEffect } from 'react'
import Datatable from '@/components/Datatable';
import Select from 'react-select'


export default function Page() {
    const selectStyle = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? '#dce9ee' : '#dce9ee',
        }),
    }
   
    const editRow = () =>{
        const handelEdit = ()=>{
            alert('Edit')
        }
        return <button type='button' onClick={handelEdit}><span className="material-symbols-outlined text-success">border_color</span></button>
    }
    const viewRow = () =>{
        const handelView = ()=>{
            alert('View')
        }
        return <button type='button' onClick={handelView}><span className="material-symbols-outlined text-primary">visibility</span></button>
    }

    const teamType = [
        { value: 'Administrator', label: 'Administrator' },
        { value: 'Team Member', label: 'Team Member' },
    ]
    const teamID = [
        { value: 'All', label: 'All' },
        { value: 'None', label: 'None' },
        { value: 'Prith_Team', label: 'Prith_Team' }
    ]
    const statusOptions = [
        { value: 'All', label: 'All' },
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' }
    ]
    const companyOptions = [
        { value: 'Adfecta Ltd', label: 'Adfecta Ltd' },
        { value: 'Grow and Thrive Limited', label: 'Grow and Thrive Limited' },
        { value: 'info@piamenzies', label: 'info@piamenzies' }
    ]
    const columns = [
        {
            name: 'User Name',
            selector: row => row.user,
            sortable: true,
        },
        {
            name: 'Email Address',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'User Type',
            selector: row => row.type,
            sortable: true,
        },
        {
            name: 'Team',
            selector: row => row.team,
            sortable: true,
        },
        {
            name: 'LoginID',
            selector: row => row.loginID,
            sortable: true,
        },
        {
            name: 'Expiry Date',
            selector: row => row.expiry,
            sortable: true,
        },
        {
            name: 'View',
            selector: row => row.view,
        },
        {
            name: 'Edit',
            selector: row => row.edit,
        }
    ];

    const data = [
        {
            id: 1,
            user: 'Dr. Manjiri Lele',
            email: 'rajjog@icloud.com',
            type: 'Team Member',
            team: 'baba',
            loginID: '1580985539',
            expiry: '18 Mar,2020',
            view: viewRow(),
            edit: editRow()
        },
        {
            id: 2,
            user: 'Babai',
            email: 'rajjog@icloud.com',
            type: 'Team Member',
            team: 'mu',
            loginID: '1580985539',
            expiry: '18 Mar,2020',
            view: viewRow(),
            edit: editRow()
        },
    ]

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted && (
        <>
            <div className='cardBox'>
                <div className="cardBoxTitle bg-light">
                    <div className='d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">User Listing</h6></div>
                        <div className='d-flex flex-wrap flex-md-nowrap align-items-center gap-2'>

                            <div className='cardBoxTitleMid'><Select styles={selectStyle} options={teamType} /></div>
                            <div className='cardBoxTitleMid'><Select styles={selectStyle}  options={teamID} /></div>
                            <div className='cardBoxTitleMid'><Select styles={selectStyle} options={statusOptions} /></div>
                            <div className='cardBoxTitleMid'><Select styles={selectStyle} options={companyOptions} /></div>

                        </div>
                    </div>
                </div>

                <div className='cardBoxBody'>
                    <Datatable columns={columns} data={data} filterItem='team' />

                </div>

            </div>

        </>
    )
}
