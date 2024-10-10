import React from 'react'
import Ameacas from './Ameacas/Ameacas'
import AmeacasTop from './Ameacas/AmeacasTop'
import TableMachine from './TableMachine'

const Dashboard = () => {
  return (
    <>
      <div className='animeLeft flex flex-col flex-wrap justify-center items-center gap-8'>

            <Ameacas/>
            <AmeacasTop/>
            <TableMachine/>
    </div>
    </>
  )
}

export default Dashboard
