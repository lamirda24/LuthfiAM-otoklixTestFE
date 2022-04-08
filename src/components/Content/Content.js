import React from "react";
import Section from "./Pages/Home/Section";
import styled from "styled-components";

const Content = () => {
  return (
    <Container>
      <Section />
    </Container>
  );
};

export default Content;

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  // width: 100vw;
`;
