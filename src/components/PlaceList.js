import React from "react";
import styled from "styled-components";

const PlaceLi = styled.li`
  list-style: none;
`;

const PlaceList = ({ place, onClick }) => {
  return (
    <PlaceLi
      onClick={() => {
        onClick(place);
      }}
    >
      <h4>{place.place_name}</h4>
      {place.address_name} {place.road_address_name}
    </PlaceLi>
  );
};

export default PlaceList;
