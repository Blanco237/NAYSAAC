import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'
import Loader from '../components/shared/Loader/Loader'

import { routes } from './Routes'

const AppRouter = () => {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
        {
            routes.map((route,key) => {
                return <Route key={key} exact={route.exact} path={route.path} element={<route.element />}/>
            })
        }
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default AppRouter