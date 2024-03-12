'use client'
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Event from '@/utils/Event'


export default function Page() {
    const localizer = momentLocalizer(moment) 
    
    return (
        <>

            <div className='cardBox'>
                <div className="cardBoxTitle cardBoxTitleSmall bg-light">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div><h6 className="fw-semibold mb-0">Calendar</h6></div>
                    </div>
                </div>

                <div className='cardBoxBody'>

                    <Calendar
                        localizer={localizer}
                        events={Event}
                       
                       
                        style={{ height: 500 }}
                    />
                </div>

            </div>

        </>
    )
}
