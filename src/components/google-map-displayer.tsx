"use client";

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };
  
  const center = {
    lat: -25.970721619053727, // Latitude for Maputo
    lng: 32.56894200753222  // Longitude for Maputo
  };
  
const GoogleMapDisplayer = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      });
    
      const map = useMemo(() => (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      ), []);
 
      return <div>{isLoaded ? map : <div>Loading...</div>}</div>;
};

export default GoogleMapDisplayer;

