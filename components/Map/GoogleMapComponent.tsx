'use client';

import { memo, useCallback, useEffect, useState } from 'react';
import classes from './GoogleMapComponent.module.scss';
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindow,
} from '@react-google-maps/api';
import { MapLocation } from '@/models/sectionModel';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 50.089466876881514,
  lng: 19.96849431903211,
};

interface GoogleMapComponentInterface {
  locations: MapLocation[];
}

function GoogleMapComponent({ locations }: GoogleMapComponentInterface) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });

  const [selectedPlace, setSelectedPlace] = useState<MapLocation | undefined>();

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {locations.map((location) => (
        <MarkerF
          key={location.lat}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => {
            location === selectedPlace
              ? setSelectedPlace(undefined)
              : setSelectedPlace(location);
          }}
        />
      ))}
      {selectedPlace && (
        <InfoWindow
          position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
          zIndex={1}
          options={{
            pixelOffset: {
              width: 0,
              height: -40,
            },
          }}
          onCloseClick={() => setSelectedPlace(undefined)}
        >
          <div className={classes.infoWindowText}>
            <p dangerouslySetInnerHTML={{ __html: selectedPlace.name }} />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <p style={{ color: 'red', fontWeight: 500 }}>Mapa nie została załadowana</p>
  );
}

export default memo(GoogleMapComponent);
