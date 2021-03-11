import React from 'react';

import './MapPage.css';

function MapPage({ src, title }) {
    return (
        <div className="frameContainer">
            <iframe
                className="iframe"
                src={src}
                title={title}
                scrolling="no"
                allowFullScreen />
        </div>
    );
}

export default MapPage;