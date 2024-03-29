import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs  from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import {state} from "./redux/State";




const App = () => {


    return (
        <BrowserRouter>
            < div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={state.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
