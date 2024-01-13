import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import earth from "@/public/images/gl.png";
import ThreeGlobe from 'three-globe';
import Globe from 'react-globe.gl';
const GlobeVisualization = () => {
  
//   if(typeof window !== 'undefined')
// {
// }
//   const N = 20;
//   const arcsData = [...Array(N).keys()].map(() => ({
//     startLat: (Math.random() - 0.5) * 180,
//     startLng: (Math.random() - 0.5) * 360,
//     endLat: (Math.random() - 0.5) * 180,
//     endLng: (Math.random() - 0.5) * 360,
//     color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
//   }));
  return(
    <>
   {/* <Globe
      globeImageUrl="/images/gl.png"
      arcsData={arcsData}
      arcColor={'color'}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      />, */}
    </>
    );
};

export default GlobeVisualization;
