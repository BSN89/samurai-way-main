import React from 'react';
import './App.css';
import Accordion from "./Accordion/Accordion";



function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
            <Star/>
        </div>
)
}

function AppTitle() {
    console.log("AppTitle rendering")
    return (
        <>This is App component</>
    )
}

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}



function Star() {
    console.log("Star rendering")
    return (
        <div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
        </div>
    )
}







export default App;
