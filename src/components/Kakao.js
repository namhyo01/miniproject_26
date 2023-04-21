import React, { useEffect, useRef } from "react";

const { kakao } = window;

const Kakao = () => {
  const mapRef = useRef();

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, options);
    console.dir(typeof map);
  });

  return (
    <div id="map" style={{ width: "90vw", height: "90vh" }} ref={mapRef}></div>
  );
};

export default Kakao;
