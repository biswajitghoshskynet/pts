
import React, { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Header() {
  const [dropdownShow, setDropdownShow] = useState(false)
  const [style, setStyle] = useState({ display: 'none' })

 
 

  const handleDropdown = (e) => {
    const dropdown = document.querySelector('#userDropdown')
    console.log(e.target.id);


    if (dropdownShow === false) {
      setDropdownShow(true)
      setStyle({ display: 'block' })

    }
    else {
      setDropdownShow(false)
      setStyle({ display: 'none' })
    };
  }



  return (
    <>
      <div className='header'>
        <div className='container-fluid'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='headerLeft d-flex gap-2 align-items-center'>
              <div className='headerTitle h4 mb-0 d-none d-md-inline-block'>Admin Dashboard</div>
              <div className='loginId'><span className="badge text-bg-light">Login ID : 1460107781</span></div>
            </div>
            <div className='headerRight'>
              <ul className='d-flex gap-2 align-items-center'>
                <li>
                  <button type="button" className="btn btn-outline-primary roundIconBtn">
                    <span className="material-symbols-outlined">contact_support</span>

                  </button>
                </li>
                <li>
                  <button type="button" className="btn btn-outline-primary roundIconBtn position-relative z-2">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
                      9
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </li>
                <li>
                  <div className="dropdown">
                    <button className="btn btn-primary btn-sm text-capitalize fw-medium" id='HeaderBtn' type="button" onClick={handleDropdown}>
                      <span className="material-symbols-outlined">account_circle</span> <span className='headerBtnText d-none d-md-inline-block'>System Administrator</span> <span className="material-symbols-outlined">expand_more</span>
                    </button>
                    <ul className="dropdown-menu" id='userDropdown' style={style}>
                      <li><Link className="dropdown-item" href="/user/profile"><span className="material-symbols-outlined">manage_accounts</span> Profile</Link></li>
                      <li><Link className="dropdown-item" href="/user/changecompany"><span className="material-symbols-outlined">widgets</span> Change Company</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item" href="#"><span className="material-symbols-outlined text-danger">power_settings_new</span> Logout</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
