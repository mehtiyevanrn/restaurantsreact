import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import {useSelector } from 'react-redux/es/exports'

function ProtectRouter() {
    let data=useSelector(state=>state.RegisterUser);
    if(data !== false ){
      data = true;
    }
  return (
    <div>
        {data ? <Outlet></Outlet> : <Navigate to="/registr"></Navigate>}
    </div>
  )
}

export default ProtectRouter