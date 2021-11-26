import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { Navbar } from '../components/ui/Navbar';
import { CreateEmpScreen } from '../components/screens/CreateEmpScreen';
import { HomeScreen } from '../components/screens/HomeScreen';
import { ListEmpScreen } from '../components/screens/ListEmpScreen';
import { startLoadingEmp } from '../actions/empleados';



export const AppRouter = () => {
    
    const dispatch = useDispatch();
    dispatch( startLoadingEmp() );
    
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/menita-rh/home" component={ HomeScreen } />
                <Route exact path="/menita-rh/create-emp" component={ CreateEmpScreen } />
                <Route exact path="/menita-rh/list-emp" component={ ListEmpScreen } />

                <Redirect to="/menita-rh/home" />
            </Switch>
            
        </Router>
    )
}
