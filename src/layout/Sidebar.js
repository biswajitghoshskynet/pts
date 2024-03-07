
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const handleDropdown = (event) => {
    let target = event.target;
    let parent = target.parentElement;
    const menuList = document.querySelectorAll('.menuList')
    menuList.forEach((item) => {
      item.classList = 'menuList'
    })
    parent.className = 'menuList active'



  }


  return (
    <>
      <div className='sideBar' >

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
                  src="/img/logo.png"
                  width={55}
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
                <li><Link href="">Menu Role Assign</Link> </li>
                <li><Link href="">Menu User Assign</Link> </li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">settings_account_box</span> Master Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
              <ul>
                <li><Link href="">Ethnicity</Link> </li>
                <li><Link href="">Profession</Link> </li>
                <li><Link href="">Referral Source</Link> </li>
                <li><Link href="">Referral Outcome</Link> </li>
                <li><Link href="">Referral Reasons</Link> </li>
                <li><Link href="">Diagnosis</Link></li>
                <li><Link href="">Medication</Link></li>
                <li><Link href="">Questionnaire</Link></li>
                <li><Link href="">RCADS Points</Link></li>
                <li><Link href="">EDE-Q Scoring Logic</Link></li>
                <li><Link href="">Template</Link></li>
                <li><Link href="">Patient Notes Types</Link></li>
                <li><Link href="">Discharge Reasons</Link></li>
                <li><Link href="">Location Management</Link></li>
                <li><Link href="">Room Management</Link></li>
                <li><Link href="">App Type Management</Link></li>
                <li><Link href="">Urgency Management</Link></li>
                <li><Link href="">Referrer Details</Link></li>
                <li><Link href="">Legal Form</Link></li>
                <li><Link href="">Documentation</Link></li>
                <li><Link href="">LMS</Link></li>
                <li><Link href="">LMS BP</Link></li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">manage_accounts</span> User Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
              <ul>
                <li><Link href="">Create Team</Link></li>
                <li><Link href="">Company Listing</Link></li>
                <li><Link href="">Team Listing</Link></li>
                <li><Link href="">Create User</Link></li>
                <li><Link href="">User Listing</Link></li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">personal_injury</span> Patient Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
              <ul>
                <li><Link href="">Quick Registration</Link></li>
                <li><Link href="">Register Patient</Link></li>
                <li><Link href="">Patient Listing</Link></li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">pending_actions</span> Appointment Management <span className="material-symbols-outlined dropdownArrow"></span></h4>
              <ul>
                <li><Link href="">Add Appointment</Link> </li>
                <li><Link href="">Appointment Listing</Link> </li>
                <li><Link href="">Appointment History</Link> </li>
                <li><Link href="">Appointment Cancelled</Link> </li>
                <li><Link href="">Calendar</Link> </li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">assignment_ind</span> Assign Patient <span className="material-symbols-outlined dropdownArrow"></span></h4>
              <ul>
                <li><Link href="">Assign Patient To Clinician</Link> </li>
                <li><Link href="">Assign Listing</Link> </li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">history_edu</span> Site Log <span className="material-symbols-outlined dropdownArrow"></span></h4>
              <ul>
                <li><Link href="">View Log</Link> </li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}><span className="material-symbols-outlined headingIcon">lab_profile</span> Reports <span className="material-symbols-outlined dropdownArrow"></span></h4>
              <ul>
                <li><Link href="">Manage Reports</Link> </li>
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
                <li><Link href="">Ignore Functions</Link> </li>
                <li><Link href="">Subscriptions</Link> </li>
                <li><Link href="">PayPal</Link> </li>
              </ul>
            </div>

          </div>
        </div>



      </div>

    </>
  )
}
