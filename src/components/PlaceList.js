import React from "react";
import styled from "styled-components";

const PlaceLi = styled.li`
  list-style: none;
`;
const PlaceUl = styled.ul`
  height: 200px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PlaceList = ({ places, onClick }) => {
  return (
    <PlaceUl className="list-group">
      {places.map((place, index) => (
        <PlaceLi
          onClick={() => {
            onClick(place);
          }}
          name="place"
          key={index}
          className="list-group-item"
        >
          {place.place_name}
          <br />
          {place.address_name} {place.road_address_name}
        </PlaceLi>
      ))}
    </PlaceUl>
  );
};
// const PlaceList = ({ place, onClick }) => {
//   return (
//     <PlaceLi
//       onClick={() => {
//         onClick(place);
//       }}
//     >
//       <h4>{place.place_name}</h4>
//       {place.address_name} {place.road_address_name}
//     </PlaceLi>
//   );
// };

export default PlaceList;
