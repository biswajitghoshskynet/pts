
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {

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
            <div>
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
          <div className='sideBarUser mb-2'>
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
              <h4 onClick={handleDropdown}>Home <span className="material-symbols-outlined"></span></h4>
              <ul>
                <li><Link href=''>Dashboard</Link></li>
                <li><Link href=''>Payment Info</Link></li>
              </ul>
            </div>

            <div className='menuList'>
              <h4 onClick={handleDropdown}>Menu Management <span className="material-symbols-outlined"></span></h4>
              <ul>
                <li><Link href=''>sdsd</Link></li>
                <li><Link href=''>sdsdsd</Link></li>
              </ul>
            </div>

          </div>

        </div>



      </div>

    </>
  )
}
