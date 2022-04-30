import React, { createRef } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = () => {
  const calendarRef = createRef()
  return (
      <FullCalendar
      ref = {calendarRef}
        plugins={[ dayGridPlugin,timeGridPlugin ]}
        initialView="dayGridMonth"
        customButtons = {{
          timeGridButton : {
            text : "timeDay",
            click() {
              const calender = calendarRef.current;
              if (calender) {
                const calenderApi = calender.getApi();
                calenderApi.changeView("timeGridDay")
              }
            },
          },
        timeWeekButton : {
          text : "timeWeek",
          click() {
            const calender = calendarRef.current;
            if (calender) {
              const calenderApi = calender.getApi();
              calenderApi.changeView("timeGridWeek")
            }
          },
        },
      }}
        headerToolbar = {{
          left : "prev,next",
          center : "title",
          right : 
          "today,dayGridDay,dayGridWeek,dayGridMonth,timeGridButton,timeWeekButton"
        }}
      />
    )
      }

      export default Calendar