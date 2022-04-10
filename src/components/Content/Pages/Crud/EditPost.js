import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";

const EditPost = () => {
  const history = useNavigate();
  const [data, setData] = useState();
  const params = useParams();
  const id = params.id;

  // const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .get("https://limitless-forest-49003.herokuapp.com/posts/" + id)
      .then((res) => {
        setData({
          title: res.data.tile,
          content: res.data.content,
        });
      })
      .catch((err) => {});
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (data) {
      swal("Are you sure to add new post?", {
        dangerMode: true,
        cancel: true,
        buttons: true,
        icon: "warning",
      }).then((result) => {
        if (result) {
          axios
            .put(
              "https://limitless-forest-49003.herokuapp.com/posts/" + id,
              data
            )
            .then((res) => {
              swal("Add Post Success!", "", "success").then((value) => {
                history("/");
              });
            })
            .catch((err) => {
              swal("Add Post Failed!", "", "error");
            });
        }
      });
    } else {
      swal("Field(s) can't be empty!", "", "warning");
    }
  };

  return (
    <div>
      <Container>
        <Cards>
          <CardHeader>
            <h4>Edit Post</h4>
            <Button
              className="float-lg-end"
              style={{ backgroundColor: "#ff6400", borderColor: "#ff6400" }}
              onClick={() => history("/")}
            >
              Close
            </Button>
          </CardHeader>
          <Card.Body>
            <Form onSubmit={submitForm}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Your Title Here..."
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={handleChange}
                  name="content"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#002eb4", borderColor: "#002eb4" }}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Cards>
      </Container>
    </div>
  );
};

export default EditPost;
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

const CardHeader = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;
`;
