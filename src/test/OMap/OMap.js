import React, { useEffect } from "react";
import Map from "ol/Map";
import {Tile, Vector} from "ol/layer";
import {OSM} from "ol/source";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import {GeoJSON} from "ol/format";
import {fromLonLat} from "ol/proj";
import {Fill, Stroke, Style, Text} from 'ol/style';

import './OMap.css';

import stateGeoJSON from '../../data/usa_state_join.geojson';

function OMap({ mapYear }) {

    const [map, setMap] = React.useState();
    const [vectorLayer, setVectorLayer] = React.useState();
    const mapElement = React.useRef()

    const colorRamp = [
        "rgba(40, 19, 237, 1)",
        "rgba(29, 128, 237, 1)",
        "rgba(19, 237, 237, 1)",
        "rgba(21, 214, 169, 1)",
        "rgba(24, 180, 69, 1)",
        "rgba(151, 214, 39, 1)",
        "rgba(237, 237, 19, 1)",
        "rgba(237, 193, 19, 1)",
        "rgba(237, 106, 19, 1)",
        "rgba(237, 19, 19, 1)",
        "rgba(255, 255, 255, 1)"
    ]

    function getIndex(attr) {
        if (!attr) {
            return 10
        } else {
            if (attr >= 500000) {
                return 9;
            } else if (attr >= 400000) {
                return 8;
            } else if (attr >= 300000) {
                return 7;
            } else if (attr >= 250000) {
                return 6;
            } else if (attr >= 200000) {
                return 5;
            } else if (attr >= 175000) {
                return 4;
            } else if (attr >= 150000) {
                return 3;
            } else if (attr >= 125000) {
                return 2;
            } else if (attr >= 100000) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    function getColor(feature, field) {
        let attr = feature.get(field);
        let index = getIndex(attr);
        return colorRamp[index];
    }

    React.useEffect( () => {
        var osmTile = new Tile({
            source: new OSM()
        });

        let yearField = "Y" + String(mapYear);

        let stateLayer = new Vector({
            source: new VectorSource({
                format: new GeoJSON(),
                url: stateGeoJSON
            }),
            style: function(feature) {
                return new Style({
                    fill: new Fill({
                        color: getColor(feature, yearField)
                    }),
                    stroke: new Stroke({
                        color: "black"
                    }),
                    text: new Text({
                        text: feature.get("StateCode"),
                        fill: new Fill({color: "black"}),
                        stroke: new Stroke({
                            color: "white",
                            width: 2
                        }),
                        font: "bold 8px Arial"
                    })
                });
            }
        });

        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                osmTile,
                stateLayer
            ],
            view: new View({
                center: fromLonLat([-97, 38]),
                zoom: 3
            }),
            controls: []
        });

        setMap(initialMap);
        setVectorLayer(stateLayer);

    }, []);

    React.useEffect( () => {
        if (map && vectorLayer) {
            let yearField = "Y" + String(mapYear);

            vectorLayer.setStyle(function(feature) {
                return new Style({
                    fill: new Fill({
                        color: getColor(feature, yearField)
                    }),
                    stroke: new Stroke({
                        color: "black"
                    }),
                    text: new Text({
                        text: feature.get("StateCode"),
                        fill: new Fill({color: "black"}),
                        stroke: new Stroke({color: "white"}),
                        font: "bold 8px Arial"
                    })
                });
            });
        }
    }, [mapYear])

    return (
        <div ref={mapElement} className="mapContainer"></div>
    );
} 

export default OMap;