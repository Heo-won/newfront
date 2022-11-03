import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  /* border: 1px solid red; */
  border-radius: 3px;
  /* background-color: #ff8000; */
  display: flex;
  align-items: center;
  left: 25%;
  flex-direction: column;
`;

export default function AddEventScreen() {
  const [brandname, setBrandName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };
  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("brandname", brandname);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("eventImage", fileName);
    setBrandName("");
    setTitle("");
    setContent("");

    axios
      .post("/api/events/add", formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header></Header>
      <Container>
        <h1>Add New Event</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="from-group">
            <label htmlFor="brandname">Brand Name</label>
            <input
              type="text"
              value={brandname}
              onChange={(e) => setBrandName(e.target.value)}
              className="form-control"
              placeholer="Brand Name"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="file">Choose Event Image</label>
            <input
              type="file"
              filename="eventImage"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post Event
          </button>
        </form>
      </Container>
      <Footer />
    </>
  );
}
