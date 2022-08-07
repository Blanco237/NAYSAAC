import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/shared/Header/Header'

import { routes } from './Routes'

const AppRouter = () => {

    const temp = <div style={{width:'100%',height:'100vh'}}>Coming Soon</div>

  return (
    <Router>
      <Suspense fallback={temp}>
        <Header />
        <Routes>
        {
            routes.map((route,key) => {
                return <Route key={key} exact={route.exact} path={route.path} element={<route.element />}/>
            })
        }
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRouter