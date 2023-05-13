'use client'
import React, { useState, useEffect } from 'react';
import { GeoData } from './apiTypes'
import axios from 'axios';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../Mapa'), {
  ssr: false
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
          <h1>IP Address Tracker</h1>
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search for any IP address or domain" className="input w-10 input-bordered" />
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
          <p>
            Your IP address is {geoData.ip}. You are located in {geoData.location.city},{' '}
            {geoData.location.country}.
          </p>
          <Map lat={geoData.location.lat} lng={geoData.location.lng} />
        </>
      ) : (
        <p className='flex h-screen justify-center items-center text-center'>Loading...</p>
      )}
    </div>
  );
};

export default GeoInfo;
