import React from 'react'
import MainCourses from '../components/MainCourses'
import MainAnnouncements from '../components/MainAnnouncements'

const MainContent = () => {
  return (
    <div style={{backgroundColor:"#bababa", height:"100%", width:"100%", marginTop:"0px", borderTop:"1px solid #ebebeb !important"}}>
      <MainCourses/>
      <MainAnnouncements/>
    </div>
  )
}

export default MainContent
