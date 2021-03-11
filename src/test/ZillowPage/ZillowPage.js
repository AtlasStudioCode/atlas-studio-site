import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import './ZillowPage.css';

import OMap from '../OMap/OMap';
import MapControls from '../MapControls/MapControls';
import Legend from '../Legend/Legend';

function ZillowPage() {
    const [mapYear, setYear] = useState(1996);
    const [open, setOpen] = useState(false);

    return (
        <div className="frameContainer">
            <div className="mapContainer">
                <OMap mapYear={mapYear} />
            </div>
            <div className="buttonContainer">
                <Button
                    className="legendButton"
                    style={{ display: !open ? 'block' : 'none' }}
                    variant="dark"
                    onClick={() => {
                        setOpen(!open);
                    }}>
                    Legend
                </Button>
            </div>
            <Collapse in={open}>
                <div className="legendContainer">
                    <Legend />
                    <Button
                        className="legendButton"
                        variant="dark"
                        onClick={() => {
                            setOpen(!open);
                        }}>
                        Close
                    </Button>
                </div>
            </Collapse>
            <div className="sliderContainer">
                <MapControls controlChange={controlYear => setYear(controlYear)} />
            </div>
        </div>
    );
}

export default ZillowPage;