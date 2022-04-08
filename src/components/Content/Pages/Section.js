import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Section = () => {
  return (
    <Wrap>
      <Container></Container>
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
