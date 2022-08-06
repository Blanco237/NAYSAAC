import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { routes } from './Routes'

const AppRouter = () => {

    const temp = <div style={{width:'100vw',height:'100vh'}}>Coming Soon</div>

  return (
    <Router>
        <Routes>
        {
            routes.map((route,key) => {
                return <Route key={key} {...route} element={temp}/>
            })
        }
        </Routes>
    </Router>
  )
}

export default AppRouter