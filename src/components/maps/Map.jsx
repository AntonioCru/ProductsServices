/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import './map.css'

export default function Map({ latitude, length, modifyStyle, otherclassName }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik',
  })

  if (!isLoaded) return <div>Loading ...</div>

  function Map() {
    const center = useMemo(() => ({
      lat: latitude,
      lng: length,
    }))
    return (
      <section
        className={`section-google-maps ${otherclassName} ${
          modifyStyle ? 'modify-style' : ''
        }`}
      >
        <GoogleMap
          zoom={19}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center} />
        </GoogleMap>
      </section>
    )
  }

  return <Map />
}
