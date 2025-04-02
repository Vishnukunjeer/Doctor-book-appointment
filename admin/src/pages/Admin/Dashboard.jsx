import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const Dashboard = () => {

  const {aToken,dashData,cancelAppointment,getDashData}= useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getDashData ();
    }
  }, [aToken]);
  return dashData && (
    <div>
      
    </div>
  )
}

export default Dashboard
