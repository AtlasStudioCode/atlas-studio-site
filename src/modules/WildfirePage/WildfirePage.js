import React from 'react';

import MapPage from '../../components/MapPage/MapPage';
import './WildfirePage.css';

function WildfirePage() {
    return (
        <MapPage
            src="https://atlasstudiogis.maps.arcgis.com/apps/webappviewer/index.html?id=0a1011b917bc445a943ac08bb277e301"
            title="California Wildfire and Air Quality Map" />
    );
}

export default WildfirePage;