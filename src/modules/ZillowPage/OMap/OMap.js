import React, { useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import { Tile, Vector } from "ol/layer";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import { GeoJSON } from "ol/format";
import { fromLonLat } from "ol/proj";
import { Fill, Stroke, Style } from 'ol/style';
import { Overlay } from "ol";

import './OMap.css';
import stateGeom from '../../../data/zillow_states.geojson';
import countyGeom from '../../../data/zillow_counties.geojson';

function OMap({ name, setName, price, setPrice, year }) {

    const [map, setMap] = useState();
    const [stateLayer, setStateLayer] = useState();
    const [countyLayer, setCountyLayer] = useState();
    const [overlay, setOverlay] = useState();
    const [selectFeature, setFeature] = useState();
    const mapRef = useRef();
    const overlayRef = useRef();

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
        const transparency = "1"
        const colorRamp = [
            `rgba(40, 19, 237, ${transparency})`,
            `rgba(29, 128, 237, ${transparency})`,
            `rgba(19, 237, 237, ${transparency})`,
            `rgba(21, 214, 169, ${transparency})`,
            `rgba(24, 180, 69, ${transparency})`,
            `rgba(151, 214, 39, ${transparency})`,
            `rgba(237, 237, 19, ${transparency})`,
            `rgba(237, 193, 19, ${transparency})`,
            `rgba(237, 106, 19, ${transparency})`,
            `rgba(237, 19, 19, ${transparency})`,
            `rgba(255, 255, 255, ${transparency})`
        ]
        let attr = feature.get(field);
        let index = getIndex(attr);
        return colorRamp[index];
    }

    useEffect( () => {
        const osmTile = new Tile({
            source: new OSM()
        });

        const iStateLayer = new Vector({
            source: new VectorSource({
                url: stateGeom,
                format: new GeoJSON()
            }),
            maxZoom: 6,
            style: (feature) => new Style({
                fill: new Fill({
                    color: getColor(feature, `Y${year}`)
                }),
                stroke: new Stroke({
                    color: "black"
                })
            })
        });

        const iCountyLayer = new Vector({
            source: new VectorSource({
                url: countyGeom,
                format: new GeoJSON()
            }),
            minZoom: 6,
            style: (feature) => new Style({
                fill: new Fill({
                    color: getColor(feature, `Y${year}`)
                }),
                stroke: new Stroke({
                    color: "black"
                })
            })
        });

        const iOverlay = new Overlay({
            element: overlayRef.current
        })

        const iMap = new Map({
            target: mapRef.current,
            layers: [ osmTile, iStateLayer, iCountyLayer ],
            view: new View({
                center: fromLonLat([-97, 38]),
                zoom: 3
            }),
            controls: [],
            overlays: [iOverlay]
        });

        setMap(iMap);
        setStateLayer(iStateLayer);
        setCountyLayer(iCountyLayer);
        setOverlay(iOverlay);
    }, []);

    function formatPrice(rawPrice) {
        if (rawPrice) {
            return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rawPrice);
        } else {
            return 'No data';
        }
    }

    function setContent(featureObject) {
        let tempName = featureObject.get('RegionName');
        if (!tempName) {
            tempName = featureObject.get('county_name');
        }
        setName(tempName);
        setPrice(formatPrice(featureObject.get(`Y${year}`)));
    }

    useEffect( () => {
        if (map) {
            map.on('click', e => {
                let coord = e.coordinate;
                let feature = map.forEachFeatureAtPixel(
                    e.pixel,
                    (feature, layer) => feature
                );
                if (feature) {
                    setFeature(feature);
                    setContent(feature);
                    overlay.setPosition(coord);
                } else {
                    overlay.setPosition();
                }
            });
        }
    });

    useEffect( () => {
        if (stateLayer) {
            stateLayer.setStyle((feature) => new Style({
                fill: new Fill({
                    color: getColor(feature, `Y${year}`)
                }),
                stroke: new Stroke({
                    color: "black"
                })
            }));
        }

        if (countyLayer) {
            countyLayer.setStyle((feature) => new Style({
                fill: new Fill({
                    color: getColor(feature, `Y${year}`)
                }),
                stroke: new Stroke({
                    color: "black"
                })
            }));
        }

        if (selectFeature) {
            setContent(selectFeature);
        }
    }, [year]);

    return (
        <div>
            <div ref={mapRef} className='mapContainer' />
            <div ref={overlayRef} className='overlay'>
                <div className='content'>
                    {name}<br/>{price}
                </div>
            </div>
        </div>
    );
} 

export default OMap;