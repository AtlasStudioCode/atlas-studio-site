import React from "react";
import PropTypes from 'prop-types';
import { Slider, Tooltip, withStyles } from "@material-ui/core";

import './MapControls.css';

const YearTooltip = withStyles({
    tooltip: {
        color: "white",
        backgroundColor: "black",
        border: "2px solid black",
        fontSize: "12px",
        fontFamily: "Open Sans",
        fontWeight: "bold"
    },
    arrow: {
        color: "black"
    }
})(Tooltip);

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <YearTooltip
            open={open}
            enterTouchDelay={0}
            title={value}
            placement="top"
            arrow
        >
            {children}
        </YearTooltip>
    );
}

const YearSlider = withStyles({
    root: {
        color: "black",
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: "white",
        border: "3px solid currentColor"
    },
    track: {
        height: 10,
        borderRadius: 5
    },
    rail: {
        height: 10,
        borderRadius: 5
    }
})(Slider);

function MapControls({ controlChange }) {
    const [controlYear, setControlYear] = React.useState(1996);

    const handleChange = (event, newValue) => {
        setControlYear(newValue);
    };

    React.useEffect( () => {
        controlChange(controlYear);
    });

    return (
        <div className="map-controls">
            <YearSlider
                ValueLabelComponent={ValueLabelComponent}
                valueLabelDisplay="auto"
                step={1}
                defaultValue={1996}
                min={1996}
                max={2020}
                onChange={handleChange}
            />
        </div>
    );
}

export default MapControls;