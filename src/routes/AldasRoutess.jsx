import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { HomePage } from '../HomePage';
import { Footer } from '../components/Footer';
import { RecetasRoutes } from '../components/RecetasRoutes';
import { Contacto } from '../pages/Contacto';

export const AldasRoutess = () => {
  return (
    <>
        <Navbar/>
            <div className='mx-auto mt-28 lg:mt-36 z-10'>
                <Routes>
                    <Route path='home' element={ <HomePage/> }/>
                    <Route path='recetas' element={ <RecetasRoutes/> }/>
                    <Route path='contacto' element={ <Contacto/> }/>
                    <Route path='/*' element={<Navigate to="/home"/>}/>  
                </Routes>
            </div>
        <Footer/>
    </>
  )
}
