import React, { useState } from "react";

import "./Controls.css"

function Controls({ rasterId, setRasterId }) {
    function handleChange(e) {
        const valueSelected = parseInt(e.target.value);
        setRasterId(valueSelected);
    }

    const items = [
        { label: "Dirt Trail", color: "#ffffff" },
        { label: "Dry Grass", color: "#ffd37f" },
        { label: "Dense Shrubs", color: "#e8beff" },
        { label: "Green Vegetation", color: "#73ffdf" },
    ];

    const legendItems = items.map((item) =>
        <div className="legendItem">
            <div className="legendColor" style={{ backgroundColor: item.color }}></div>
            <div className="legendLabel">{item.label}</div>
        </div>
    );

    const legendElement = (
        <div id="classLegend" >
            {legendItems}
        </div>
    );

    return (
        <div>
            <div id="rasterContainer">
            <label for="rasters" id="rasterLabel">Select Image</label>
            <select name="rasters" id="rasterSelect" onChange={handleChange}>
                <option value="0">None</option>
                <option value="1" selected>Standard</option>
                <option value="2">Segmented</option>
                <option value="3">Classified</option>
            </select>
            </div>
            { (rasterId === 3) ? legendElement : null}
        </div>
    );
}

export default Controls;