import React from 'react';

import MapPage from '../../components/MapPage/MapPage';
import './TribalPage.css';

function TribalPage() {
    return (
        <MapPage
            src="https://atlasstudiogis.maps.arcgis.com/apps/webappviewer/index.html?id=3dd1bc80df8f4cbd9c1fa8f265c2725e"
            title="California Native American Tribal Boundaries Map" />
    );
}

export default TribalPage;