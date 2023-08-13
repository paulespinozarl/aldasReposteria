import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CupChoco } from '../pages/CupChoco'
import { TortaTres } from '../pages/TortaTres'
import { GridModal } from './Grid/GridModal'

export const RecetasRoutes = () => {
  return (
    <>
        <GridModal/>
        {/* <div>
            <Routes>
                <Route path='cupchoco' element={ <CupChoco/> }/>
                <Route path='tortatresleches' element={ <TortaTres/> }/>
                <Route path='/recetas/*' element={<Navigate to="/cupchoco"/>}/>   
            </Routes>
        </div> */}
    </>
  )
}
