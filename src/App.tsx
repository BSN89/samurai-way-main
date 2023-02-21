import React from 'react';
import './App.css';



function App() {
    return (
        <div>
            This is App component
            <Rating/>
            <Accordion/>
            <Star/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Star() {
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
