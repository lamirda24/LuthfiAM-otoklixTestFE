import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import moment from "moment";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import DetailPost from "./DetailPost";

const SectionComponent = ({
  id,
  title,
  content,
  created_at,
  updated_at,
  // refresh,
  // handleRefresh,
  handleDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const data = {
    id: id,
    title: title,
    content: content,
    created_at: created_at,
    updated_at: updated_at,
  };

  return (
    <>
      <Content key={id}>
        <Card className="h-100">
          <CardHeader>
            {title}
            <Dropdown size="sm">
              <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => setShowModal(true)}
                  className="dropdown-item"
                >
                  Detail
                </Dropdown.Item>
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
      {showModal ? (
        <DetailPost show={showModal} handleClose={handleClose} data={data} />
      ) : (
        <></>
      )}
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
  margin-bottom: 1rem;
  background-color: 
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
