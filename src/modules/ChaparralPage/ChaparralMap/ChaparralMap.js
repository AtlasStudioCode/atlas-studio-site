import React, { useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import { Tile } from "ol/layer";
import { ImageStatic, TileImage } from "ol/source";
import ImageLayer from "ol/layer/Image";
import View from "ol/View";
import { fromLonLat } from "ol/proj";

import './ChaparralMap.css';
import standardRaster from '../../../data/raster/standard.png';
import segmentRaster from '../../../data/raster/segment.png';

function ChaparralMap() {

    const [map, setMap] = useState();
    const [standardLayer, setStandardLayer] = useState();
    const [segmentLayer, setSegmentLayer] = useState();
    const [classLayer, setClassLayer] = useState();
    const mapRef = useRef();

    useEffect( () => {
        const satelliteTile = new Tile({
            source: new TileImage({
                url: "http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
            })
        });

        const extent = [
            -13099935.899215,
            3963476.585760,
            -13099843.235215,
            3963588.077760
        ];

        const iStandardLayer = new ImageLayer({
            source: new ImageStatic({
                url: standardRaster,
                imageExtent: extent
            })
        });

        const iSegmentLayer = new ImageLayer({
            source: new ImageStatic({
                url: segmentRaster,
                imageExtent: extent
            })
        });

        const iMap = new Map({
            target: mapRef.current,
            layers: [
                satelliteTile,
                iStandardLayer
            ],
            view: new View({
                center: fromLonLat([-117.67832, 33.512515]),
                zoom: 20
            }),
            controls: []
        });

        setMap(iMap);
        setStandardLayer(iStandardLayer);
        setSegmentLayer(iSegmentLayer);
    }, []);

    return (
        <div ref={mapRef} className="map" />
    );
} 

export default ChaparralMap;