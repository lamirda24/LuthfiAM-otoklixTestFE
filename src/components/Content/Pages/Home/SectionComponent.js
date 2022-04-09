import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import moment from "moment";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const SectionComponent = ({
  id,
  title,
  content,
  created_at,
  // refresh,
  // handleRefresh,
  handleDelete,
}) => {
  return (
    <>
      <Content key={id}>
        <Card className="h-100">
          <CardHeader>
            {title}
            <Dropdown size="sm">
              <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to={"posts/" + id} className="dropdown-item">
                  Detail
                </Link>
                <Link to={"update/" + id} className="dropdown-item">
                  Update
                </Link>
                <Dropdown.Item href="#" onClick={() => handleDelete(id)}>
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </CardHeader>
          <Card.Body className="">{content}</Card.Body>
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
      </Content>
    </>
  );
};

export default SectionComponent;
const CardHeader = styled.div`
  display:flex;
  height:40px;
  font-size: 20px;
  font-weight: 600;
  padding: 0.5rem 1rem; 
  margin-bottom: 0;
  background-color: 
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
