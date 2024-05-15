/* eslint-disable react/prop-types */
import React, { useMemo, useState, useEffect } from 'react'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import './map.css'

export default function EditPointMap({
  latitude,
  length,
  modifyStyle,
  changePosition,
}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik',
  })

  const [changeValue, setChangeValue] = useState({ lat: latitude, lng: length })

  useEffect(() => {
    changePosition(changeValue)
  }, [changeValue])

  if (!isLoaded) return <div>Loading ...</div>

  const handleChangeValue = (event) => {
    setChangeValue({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    })
  }

  function Map() {
    const center = useMemo(() => ({
      lat: latitude,
      lng: length,
    }))
    return (
      <section
        className={`section-google-maps ${modifyStyle ? 'modify-style' : ''}`}
      >
        <GoogleMap
          zoom={19}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker
            position={changeValue}
            draggable
            onDragEnd={handleChangeValue}
          />
        </GoogleMap>
      </section>
    )
  }

  return <Map />
}
