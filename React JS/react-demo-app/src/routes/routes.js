import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DashboardLayout from '../layout/DashboardLayout'
import MyProducts from '../containers/MyProducts'
import OrderManagement from '../containers/OrderManagement'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='/dashboard' element={<Home />}>
          <Route path='myProducts' element={<MyProducts />} />
          <Route path='order-management' element={<OrderManagement />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRoutes;