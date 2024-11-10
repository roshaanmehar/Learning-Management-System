import React from 'react'
import TimetableComponents from '../components/TimetableComponents'

const Timetable = () => {
  return (
    <div style={{backgroundColor:"white", height:"100%"}}>
      <div style={{display:"flex", flexWrap:"wrap", }}>
      <TimetableComponents/>
    </div>
    </div>
  )
}

export default Timetable
