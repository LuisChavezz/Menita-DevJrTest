import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navigate } from 'react-router';

import { Navbar } from '../components/ui/Navbar';
import { CreateEmpScreen } from '../components/screens/CreateEmpScreen';
import { HomeScreen } from '../components/screens/HomeScreen';
import { ListEmpScreen } from '../components/screens/ListEmpScreen';


export const AppRouter = () => {
    
    
    
    return (
        <div>
            <Navbar />

            <Routes >
                    <Route exact="true" path="/menita-rh/homepage" element={ <HomeScreen /> } />
                    <Route exact="true" path="/menita-rh/create-emp" element={ <CreateEmpScreen /> } />
                    <Route exact="true" path="/menita-rh/list-emp" element={ <ListEmpScreen /> }  />

                    <Route path="*" element={ <Navigate to="/menita-rh/homepage" /> }  />
            </Routes>
        </div>
    )
}
