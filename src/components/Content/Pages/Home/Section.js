import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import SectionComponent from "./SectionComponent";
import moment from "moment";

const Section = () => {
  const [data, setData] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`https://limitless-forest-49003.herokuapp.com/posts`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  };

  return (
    // <Wrap>{/* </Wrap> */}
    <Container>
      <Cards>
        <Card.Header>
          <h3>B-Log</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            {loading ? (
              <>
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
              </>
            ) : data.length > 0 ? (
              data?.map((item, idx) => (
                <SectionComponent
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  created_at={moment(item.created_at).format("MMMM Do YYYY")}
                />
              ))
            ) : (
              <></>
            )}
          </Row>
        </Card.Body>
      </Cards>
    </Container>
  );
};

export default Section;

const Container = styled.div`
  position: relative;
  display: grid;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
`;
const Cards = styled.div`
  //   position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.8rem;
`;
