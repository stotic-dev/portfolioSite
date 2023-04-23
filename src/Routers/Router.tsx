import NotFoundErrorPage from '../Components/Pages/NotFoundErrorPage'
import MainPage from '../Components/Pages/MainPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactPage from '../Components/Pages/ContactPage'

const Router = () => {
  return (
    <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/*'} element={<NotFoundErrorPage />} />
    </Routes>
  )
}

export default Router