'use client'
import React, { useState, useEffect } from 'react';
import {GeoData} from './apiTypes'
import axios from 'axios';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../Mapa'), {
  ssr:false
})



const GeoInfo: React.FC = () => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<GeoData>(
        'https://geo.ipify.org/api/v2/country,city',
        {
          params: {
            apiKey: 'at_zyWhx2eVH01mpaQEjGDpNpTZRz8m8',
          },
        }
      );

      setGeoData(response.data);
    };

    fetchData();
  }, []);
console.log(geoData);

  return (
    <div>
      
      {geoData ? (
        <>
        <p>
          Your IP address is {geoData.ip}. You are located in {geoData.location.city},{' '}
          {geoData.location.country}.
        </p>
        <Map />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GeoInfo;
