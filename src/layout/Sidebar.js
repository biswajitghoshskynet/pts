
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [display, setDisplay] = useState(true)
  const [style, setStyle] = useState('sideBar')

  const pathname = usePathname()

  const handleDisplay = () => {
    if (display === true) {
      setDisplay(false)
      setStyle('sideBar hide')

    }
    else {
      setDisplay(true)
      setStyle('sideBar')
    };

  }

  const handleDropdown = (event) => {
    let target = event.target;
    let parent = target.parentElement;
    const menuList = document.querySelectorAll('.menuList')
    menuList.forEach((item) => {
      item.classList = 'menuList'
    })
    if (parent.classList == 'menuList') {
      parent.classList = 'menuList active'
    }
    else {
      parent.classList = 'menuList'
    }

  }


  return (
    <>
      <div className='sideBarHold'>
        <div className='sideBarToggleTrigger bg-success' onClick={handleDisplay}><span className="material-symbols-outlined">
          menu_open
        </span></div>
        <div className={style} >


          <div className='sideBarHeader'>
            <div className='d-flex gap-2 align-items-center'>
              <div className='sideBarHeaderLogo'>
                <Image
                  src="/img/logo.png"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </div>
              <div>
                <h5 className='mb-0'>PTS Admin</h5>
                <p className='mb-0'><small>Patient Tracker System</small></p>
              </div>
            </div>
          </div>

          <div className='sidebarContent'>
            <div className='sideBarUser mb-3'>
              <div className='d-flex gap-2 align-items-center'>
                <div>
                  <Image
                    src="/img/placeholder.jpg"
                    width={55}
                    className="rounded-circle"
                    height={55}
                    alt="logo"
                  />
                </div>
                <div>
                  <h4 className='mb-0'>Welcome,</h4>
                  <p className='mb-0'><small>System</small></p>
                </div>
              </div>
            </div>

            <div className='sidebarMenu'>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">cottage</span> Home <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/' ? 'active' : ''}`}><Link href='/'>Dashboard</Link></li>
                  <li className={`${pathname === '/paymentinfo' ? 'active' : ''}`}><Link href='/paymentinfo'>Payment Info</Link></li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">format_list_numbered</span> Menu Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/menu' ? 'active' : ''}`}><Link href="/menu">Menu Listing</Link> </li>
                  <li className={`${pathname === '/menu/role' ? 'active' : ''}`}><Link href="/menu/role">Role Listing</Link> </li>
                  <li className={`${pathname === '/menu/menurole' ? 'active' : ''}`}><Link href="/menu/menurole">Menu Role Assign</Link> </li>
                  <li className={`${pathname === '/menu/menuuser' ? 'active' : ''}`}><Link href="/menu/menuuser">Menu User Assign</Link> </li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">settings_account_box</span> Master Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/masters/ethnicity' ? 'active' : ''}`}><Link href="/masters/ethnicity">Ethnicity</Link> </li>
                  <li className={`${pathname === '/masters/profession' ? 'active' : ''}`}><Link href="/masters/profession">Profession</Link> </li>
                  <li className={`${pathname === '/masters/reffsource' ? 'active' : ''}`}><Link href="/masters/reffsource">Referral Source</Link> </li>
                  <li className={`${pathname === '/masters/reffoutcome' ? 'active' : ''}`}><Link href="/masters/reffoutcome">Referral Outcome</Link> </li>
                  <li className={`${pathname === '/masters/reffreasons' ? 'active' : ''}`}><Link href="/masters/reffreasons">Referral Reasons</Link> </li>
                  <li className={`${pathname === '/masters/diagnosis' ? 'active' : ''}`}><Link href="/masters/diagnosis">Diagnosis</Link></li>
                  <li className={`${pathname === '/masters/medication' ? 'active' : ''}`}><Link href="/masters/medication">Medication</Link></li>
                  <li className={`${pathname === '/masters/questioner' ? 'active' : ''}`}><Link href="/masters/questioner">Questionnaire</Link></li>
                  <li className={`${pathname === '/masters/rcadspoint' ? 'active' : ''}`}><Link href="/masters/rcadspoint">RCADS Points</Link></li>
                  <li className={`${pathname === '/masters/edeqlogic' ? 'active' : ''}`}><Link href="/masters/edeqlogic">EDE-Q Scoring Logic</Link></li>
                  <li className={`${pathname === '/masters/template' ? 'active' : ''}`}><Link href="/masters/template">Template</Link></li>
                  <li className={`${pathname === '/masters/patientnotestypes' ? 'active' : ''}`}><Link href="/masters/patientnotestypes">Patient Notes Types</Link></li>
                  <li className={`${pathname === '/masters/dischargereasons' ? 'active' : ''}`}><Link href="/masters/dischargereasons">Discharge Reasons</Link></li>
                  <li className={`${pathname === '/masters/location' ? 'active' : ''}`}><Link href="/masters/location">Location Management</Link></li>
                  <li className={`${pathname === '/masters/room' ? 'active' : ''}`}><Link href="/masters/room">Room Management</Link></li>
                  <li className={`${pathname === '/masters/apptype' ? 'active' : ''}`}><Link href="/masters/apptype">App Type Management</Link></li>
                  <li className={`${pathname === '/masters/urgency' ? 'active' : ''}`}><Link href="/masters/urgency">Urgency Management</Link></li>
                  <li className={`${pathname === '/masters/refferrer' ? 'active' : ''}`}><Link href="/masters/refferrer">Referrer Details</Link></li>
                  <li className={`${pathname === '/masters/legalform' ? 'active' : ''}`}><Link href="/masters/legalform">Legal Form</Link></li>
                  <li className={`${pathname === '/masters/documentation' ? 'active' : ''}`}><Link href="/masters/documentation">Documentation</Link></li>
                  <li className={`${pathname === '/masters/lms' ? 'active' : ''}`}><Link href="/masters/lms">LMS</Link></li>
                  <li className={`${pathname === '/masters/lmsbp' ? 'active' : ''}`}><Link href="/masters/lmsbp">LMS BP</Link></li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">manage_accounts</span> User Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/user/teamadd' ? 'active' : ''}`}><Link href="/user/teamadd">Create Team</Link></li>
                  <li className={`${pathname === '/user/companylist' ? 'active' : ''}`}><Link href="/user/companylist">Company Listing</Link></li>
                  <li className={`${pathname === '/user/team' ? 'active' : ''}`}><Link href="/user/team">Team Listing</Link></li>
                  <li className={`${pathname === '/user/useradd' ? 'active' : ''}`}><Link href="/user/useradd">Create User</Link></li>
                  <li className={`${pathname === '/user' ? 'active' : ''}`}><Link href="/user">User Listing</Link></li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">personal_injury</span> Patient Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/patient/patientaddquick' ? 'active' : ''}`}><Link href="/patient/patientaddquick">Quick Registration</Link></li>
                  <li className={`${pathname === '/patient/patientadd' ? 'active' : ''}`}><Link href="/patient/patientadd">Register Patient</Link></li>
                  <li className={`${pathname === '/patient' ? 'active' : ''}`}><Link href="/patient">Patient Listing</Link></li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">pending_actions</span> Appointment Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/appointment/addapp' ? 'active' : ''}`}><Link href="/appointment/addapp">Add Appointment</Link> </li>
                  <li className={`${pathname === '/appointment' ? 'active' : ''}`}><Link href="/appointment">Appointment Listing</Link> </li>
                  <li className={`${pathname === '/appointment/apphistory' ? 'active' : ''}`}><Link href="/appointment/apphistory">Appointment History</Link> </li>
                  <li className={`${pathname === '/appointment/canceled' ? 'active' : ''}`}><Link href="/appointment/canceled">Appointment Cancelled</Link> </li>
                  <li className={`${pathname === '/calendar' ? 'active' : ''}`}><Link href="/calendar">Calendar</Link> </li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">assignment_ind</span> Assign Patient <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/patient/assignadd' ? 'active' : ''}`}><Link href="/patient/assignadd">Assign Patient To Clinician</Link> </li>
                  <li className={`${pathname === '/patient/assign' ? 'active' : ''}`}><Link href="/patient/assign">Assign Listing</Link> </li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">history_edu</span> Site Log <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/log' ? 'active' : ''}`}><Link href="/log">View Log</Link> </li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">lab_profile</span> Reports <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/reports' ? 'active' : ''}`}><Link href="/reports">Manage Reports</Link> </li>
                  <li><Link href="">Team Wise</Link> </li>
                  <li><Link href="">Clinician Wise</Link> </li>
                  <li><Link href="">Activity data Team Wise</Link> </li>
                  <li><Link href="">Activity data Clinician Wise</Link> </li>
                  <li><Link href="">Outcome measures wise</Link> </li>
                </ul>
              </div>

              <div className='menuList'>
                <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">settings</span> Site Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
                <ul>
                  <li className={`${pathname === '/sitemanage/igfunction' ? 'active' : ''}`}><Link href="/sitemanage/igfunction">Ignore Functions</Link> </li>
                  <li className={`${pathname === '/sitemanage/subscription' ? 'active' : ''}`}><Link href="/sitemanage/subscription">Subscriptions</Link> </li>
                  <li className={`${pathname === '/paypal' ? 'active' : ''}`}><Link href="/paypal">PayPal</Link> </li>
                </ul>
              </div>

            </div>
          </div>



        </div>
      </div>


    </>
  )
}
