import React from "react";

function Accordion(props: any) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>{props.titleValue}</h3>
        </div>
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

export default Accordion