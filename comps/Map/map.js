import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

export default function Map() {

    const positions = [
        [49.28594, -123.11129],
        [49.285581150633966, -123.12012245876285],
        [49.28276795358473, -123.1164699145821], 
        [49.28010484687972, -123.11012142014103],
        [49.273374980784865, -123.10037145876296],
        [49.262721001091556, -123.06927941643552],
        [49.24844626535717, -123.05598167410812],
        [49.24436337925635, -123.04537402992739],
        [49.23855530902799, -123.0317256145831],
        [49.22991271599505, -123.01265107225555],
        [49.22593989446889, -123.00385127225569],
        [49.220193228996386, -122.98845204229738],
        [49.21254265709066, -122.95914504342],
        [49.200068725477024, -122.94922489130668],
        [49.20159918383558, -122.91263972992837],
        [49.204943945073374, -122.90607708574763],
        [49.204575904842045, -122.87402738018886],
        [49.1991136014707, -122.85066387225632],
        [49.18971392944762, -122.84792071458409],
        [49.1829310367517, -122.84473292807587],
    ]

    const morePositions = [
        [49.204943945073374, -122.90607708574763],
        [49.224860238697396, -122.88949270294468],
        [49.23268213068468, -122.88456287225554],
        [49.24875892482227, -122.89717730665],
        [49.25367827613695, -122.91868207173422]
    ]

    const blueOption = { color: '#2eb2ff' };

    return (
        <MapContainer className={style.map} center={[49.28594, -123.11129]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={positions[0]}>
                <Popup>Waterfront</Popup>
            </Marker>

            <Marker position={positions[1]}>
                <Popup>Burrard</Popup>
            </Marker>

            <Marker position={positions[2]}>
                <Popup>Granville</Popup>
            </Marker>

            <Marker position={positions[3]}>
                <Popup>
                    Stadium-Chinatown
                </Popup>
            </Marker>

            <Marker position={positions[4]}>
                <Popup>Main Street–Science World</Popup>
            </Marker>

            <Marker position={positions[5]}>
                <Popup>Commercial-Broadway</Popup>
            </Marker>

            <Marker position={positions[6]}>
                <Popup>Nanaimo</Popup>
            </Marker>

            <Marker position={positions[7]}>
                <Popup>29th Avenue</Popup>
            </Marker>

            <Marker position={positions[8]}>
                <Popup>Joyce-Collingwood</Popup>
            </Marker>

            <Marker position={positions[9]}>
                <Popup>Patterson</Popup>
            </Marker>

            <Marker position={positions[10]}>
                <Popup>Metrotown</Popup>
            </Marker>

            <Marker position={positions[11]}>
                <Popup>Royal Oak</Popup>
            </Marker>

            <Marker position={positions[12]}>
                <Popup>Edmonds</Popup>
            </Marker>

            <Marker position={positions[13]}>
                <Popup>22nd Street</Popup>
            </Marker>

            <Marker position={positions[14]}>
                <Popup>New Westminster</Popup>
            </Marker>

            <Marker position={positions[15]}>
                <Popup>Columbia</Popup>
            </Marker>

            <Marker position={positions[16]}>
                <Popup>Scott Road</Popup>
            </Marker>

            <Marker position={positions[17]}>
                <Popup>Gateway</Popup>
            </Marker>

            <Marker position={positions[18]}>
                <Popup>Surrey Central</Popup>
            </Marker>

            <Marker position={positions[19]}>
                <Popup>King George</Popup>
            </Marker>

            <Marker position={morePositions[1]}>
                <Popup>Sapperton</Popup>
            </Marker>

            <Marker position={morePositions[2]}>
                <Popup>Braid</Popup>
            </Marker>

            <Marker position={morePositions[3]}>
                <Popup>Lougheed Town Centre</Popup>
            </Marker>

            <Marker position={morePositions[4]}>
                <Popup>Production Way-University</Popup>
            </Marker>

            <Polyline pathOptions={blueOption} positions={positions}/>
            <Polyline pathOptions={blueOption} positions={morePositions}/>
        </MapContainer>
    )
}