import React from 'react';
import './App.css';



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

function Accordion() {
    console.log("Accordion rendering")
    return (
        <>
        <AccordionTitle/>
        <AccordionBody/>
        </>
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

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <>
            <h3>Меню</h3>
        </>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <> <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        </>
    )
}



export default App;
