import React, { useState } from 'react';

import './ChaparralPage.css';

import ChaparralMap from './ChaparralMap/ChaparralMap';
import Controls from './Controls/Controls';

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function ChaparralPage() {
    const [rasterId, setRasterId] = useState(1);

    return (
        <div className="frameContainer">
            <div className="controlsContainer">
                <Controls
                    rasterId={rasterId}
                    setRasterId={setRasterId} />
            </div>
            <div className="mapContainer">
                <ChaparralMap
                    rasterId={rasterId} />
            </div>
        </div>
    );
}

export default ChaparralPage;