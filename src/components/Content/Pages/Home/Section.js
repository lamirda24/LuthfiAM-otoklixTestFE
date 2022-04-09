import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import SectionComponent from "./SectionComponent";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Section = () => {
  const [data, setData] = useState("");
  const [ref, setRef] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    setLoading(true);
    getData();
  }, [ref]);
  const getData = () => {
    axios
      .get(`https://limitless-forest-49003.herokuapp.com/posts`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  };

  const timeDiff = (created_at) => {
    let duration = moment(created_at).startOf("day").fromNow();
    return duration;
  };
  const handleRefresh = (data) => {
    setRef(data);
  };

  const handleDelete = (id) => {
    console.log(id);
    swal("Are you sure to delete post?", {
      dangerMode: true,
      cancel: true,
      buttons: true,
      icon: "warning",
    }).then((result) => {
      if (result) {
        axios
          .delete("https://limitless-forest-49003.herokuapp.com/posts/" + id)
          .then((res) => {
            swal("Delete Post Success!", "", "success").then((value) => {
              setRef(!ref);
            });
          })
          .catch((err) => {
            swal("Add Post Failed!", "", "error");
          });
      }
    });
  };

  return (
    // <Wrap>{/* </Wrap> */}
    <Container>
      <Cards>
        <CardHeader>
          <h3>B-Log</h3>
          <Button
            className="float-lg-end"
            style={{ backgroundColor: "#002eb4", borderColor: "#002eb4" }}
            onClick={() => history("/create")}
          >
            Add New Post
          </Button>
        </CardHeader>
        <Card.Body>
          <>
            {loading ? (
              <>
                <Spinner animation="grow" />
              </>
            ) : data.length > 0 ? (
              <Wrapper>
                {data?.map((item, idx) => (
                  <SectionComponent
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    created_at={timeDiff(item.created_at)}
                    // refresh={ref}
                    // setRefresh={handleRefresh}
                    handleDelete={handleDelete}
                  />
                ))}
              </Wrapper>
            ) : (
              <></>
            )}
          </>
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);
`;

const CardHeader = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;
`;
