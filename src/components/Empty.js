import React from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const Empty = () => {
  return (
    <CenterDiv>
      <h3>아직 모임이 없어요.</h3>
    </CenterDiv>
  );
};

export default Empty;
