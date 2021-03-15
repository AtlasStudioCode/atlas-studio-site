import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import './ZillowPage.css';

import OMap from './OMap/OMap';
import MapControls from './MapControls/MapControls';
import Legend from './Legend/Legend';

function ZillowPage() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [year, setYear] = useState(1996);
    const [open, setOpen] = useState(false);

    return (
        <div className="frameContainer">
            <div className="mapContainer">
                <OMap
                    name={name}
                    setName={setName}
                    price={price}
                    setPrice={setPrice}
                    year={year} />
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
                <MapControls
                    year={year}
                    setYear={setYear} />
            </div>
            <div>
                <h1 className='yearLabel'>{year}</h1>
            </div>
        </div>
    );
}

export default ZillowPage;