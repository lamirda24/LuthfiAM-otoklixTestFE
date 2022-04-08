import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import moment from "moment";

const SectionComponent = ({ id, title, content, created_at }) => {
  return (
    <>
      <Col lg={6} style={{ marginBottom: 10, paddingBottom: 5 }} key={id}>
        <Card>
          <CardHeader>{title}</CardHeader>
          <Card.Body>{content}</Card.Body>
          <Card.Footer
            className="text-muted"
            style={{
              display: "flex",
              fontSize: 11,
              justifyContent: "flex-end",
            }}
          >
            {created_at}
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default SectionComponent;
const CardHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 0.5rem 1rem; 
  margin-bottom: 0;
  background-color: 
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;
