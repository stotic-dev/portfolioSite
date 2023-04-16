import NotFoundErrorPage from '../Components/Pages/NotFoundErrorPage'
import MainPage from '../Components/Pages/MainPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TestPage from '../Components/Pages/TestPage'

const Router = () => {
  return (
    <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/Test'} element={<TestPage />} />
        <Route path={'/*'} element={<NotFoundErrorPage />} />
    </Routes>
  )
}

export default Router