import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/shared/Header/Header'

import { routes } from './Routes'

const AppRouter = () => {

    const temp = <div style={{width:'100%',height:'100vh'}}>Coming Soon</div>

  return (
    <Router>
        <Header />
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