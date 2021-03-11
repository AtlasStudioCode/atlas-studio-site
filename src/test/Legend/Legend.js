import React from "react";

import "./Legend.css";

const colorArray = [
    "rgb(40, 19, 237)",
    "rgb(29, 128, 237)",
    "rgb(19, 237, 237)",
    "rgb(21, 214, 169)",
    "rgb(24, 180, 69)",
    "rgb(151, 214, 39)",
    "rgb(237, 237, 19)",
    "rgb(237, 193, 19)",
    "rgb(237, 106, 19)",
    "rgb(237, 19, 19)",
    "rgb(255, 255, 255)"
];

const labelArray = [
    "Less than $100,000",
    "$100,000 - $125,000",
    "$125,000 - $150,000",
    "$150,000 - $175,000",
    "$175,000 - $200,000",
    "$200,000 - $250,000",
    "$250,000 - $300,000",
    "$300,000 - $400,000",
    "$400,000 - $500,000",
    "More than $500,000",
    "No data"
]

function Symbol({ rgbValue }) {
    const symbolStyle = {
        backgroundColor: rgbValue
    }

    return (
        <div style={symbolStyle} className="symbol-container"></div>
    );
}

function Label({ labelText }) {
    return (
        <div className="label-text-container">
            {labelText}
        </div>
    )
}

function LegendRow({ labelText, rgbValue }) {
    return (
        <div className="legend-row-container">
            <Symbol rgbValue={rgbValue} />
            <Label labelText={labelText} />
        </div>
    );
}

function Legend() {
    return (
        <div className="legend-container">
            <LegendRow rgbValue={colorArray[0]} labelText={labelArray[0]} />
            <LegendRow rgbValue={colorArray[1]} labelText={labelArray[1]} />
            <LegendRow rgbValue={colorArray[2]} labelText={labelArray[2]} />
            <LegendRow rgbValue={colorArray[3]} labelText={labelArray[3]} />
            <LegendRow rgbValue={colorArray[4]} labelText={labelArray[4]} />
            <LegendRow rgbValue={colorArray[5]} labelText={labelArray[5]} />
            <LegendRow rgbValue={colorArray[6]} labelText={labelArray[6]} />
            <LegendRow rgbValue={colorArray[7]} labelText={labelArray[7]} />
            <LegendRow rgbValue={colorArray[8]} labelText={labelArray[8]} />
            <LegendRow rgbValue={colorArray[9]} labelText={labelArray[9]} />
            <LegendRow rgbValue={colorArray[10]} labelText={labelArray[10]} />
        </div>
    )
}

export default Legend;