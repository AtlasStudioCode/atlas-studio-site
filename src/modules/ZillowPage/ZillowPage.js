import React from 'react';

import MapPage from '../../components/MapPage/MapPage';
import './ZillowPage.css';

function ZillowPage() {
    return (
        <MapPage
            src="https://atlasstudiogis.maps.arcgis.com/apps/webappviewer/index.html?id=6d667b81e59742be9cda1f6f8cd07876"
            title="Zillow Home Value Index Map" />
    );
}

export default ZillowPage;