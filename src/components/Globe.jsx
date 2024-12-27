import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

const CustomGlobe = () => {
    const globeEl = useRef();

    useEffect(() => {
        const globe = globeEl.current;

        // Auto-rotate
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.35;

        // Add clouds sphere
        const CLOUDS_IMG_URL = "textures/globe/clouds.png";
        const CLOUDS_ALT = 0.004;
        const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

        new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
            const clouds = new THREE.Mesh(
                new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
                new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
            );
            globe.scene().add(clouds);

            (function rotateClouds() {
                clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
                requestAnimationFrame(rotateClouds);
            })();
        });
    }, []);

    // GeoJSON data for Spain
    const spainGeoJson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": "Spain"
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [ // Peninsula
                            [
                                [-9.165669013544374, 43.1163550319562],
                                [-8.711842769370321, 42.045850176676595],
                                [-6.530542249529276, 42.101137435390285],
                                [-6.178754868230271, 41.56046140393508],
                                [-7.330055396135691, 37.216650274177766],
                                [-5.6498459466756685, 36.13852351114356],
                                [-4.568276648935381, 36.76486076798582],
                                [-2.27929259453569, 36.945725709476974],
                                [-0.5200562049114694, 38.33004571865183],
                                [0.04504764857810528, 38.67206219966218],
                                [-0.45150431243419575, 39.390347867446025],
                                [0.8501000473549425, 41.04341578902756],
                                [3.13260613049016, 41.878759306307444],
                                [3.1323929366901666, 42.376285826628305],
                                [0.7303471061756568, 42.61549310628891],
                                [-0.673485104345815, 42.721504268402526],
                                [-1.8134804069275958, 43.30744434288681]
                            ],
                        ],
                    ]
                }
            }
        ]
    };


    const pointData = {
        lat: 42.8806,
        lng: -8.5456,
        altitude: 0.25,
        radius: 0.05,
        color: "white",
    };


    const labelData = {
        lat: pointData.lat,
        lng: pointData.lng,
        altitude: 0.25,
        text: "I'm here!",
        color: "white",
        size: 5,
    };

    return (
        <Globe
            ref={globeEl}
            animateIn={false}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            height={326}
            width={326}
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}

            // Configuracion de los puntos
            pointsData={[pointData]} // Convertimos el objeto a un array
            pointLat="lat"
            pointLng="lng"
            pointAltitude="altitude"
            pointRadius="radius"
            pointColor="color"
            pointResolution={12}
            pointsMerge={false}

            // Configuracion de los labels
            labelsData={[labelData]}
            labelLat="lat"
            labelLng="lng"
            labelAltitude="altitude"
            labelText="text"
            labelColor="color"
            labelSize="size"

            hexPolygonsData={spainGeoJson.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.2}
            hexPolygonUseDots={false}
            hexPolygonAltitude={0.01}
            hexPolygonColor={(feature) => {
                if (feature.properties.name === "Spain") {
                    return "red";
                }
            }}
            hexPolygonLabel={(feature) => {
                return feature.properties.name;
            }}
            hexPolygonGeoJsonGeometry={(feature) => feature.geometry}

        />
    );
};

export default CustomGlobe;