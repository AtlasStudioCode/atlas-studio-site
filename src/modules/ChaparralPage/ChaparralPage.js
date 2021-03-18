import React from 'react';

import './ChaparralPage.css';

import ChaparralMap from './ChaparralMap/ChaparralMap';

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function ChaparralPage() {
    return (
        <div className="frameContainer">
            <div className="mapContainer">
                <ChaparralMap />
            </div>
        </div>
    );
}

export default ChaparralPage;