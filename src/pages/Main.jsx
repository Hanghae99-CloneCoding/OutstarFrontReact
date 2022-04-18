import React, { useState } from "react";
import styled from "styled-components";
import Post from "../components/Post";

const Main = (props) => {
  return (
    <div
      style={{
        marginTop: "70px",
        backgroundColor: "#fafafa",
      }}
    >
      <Sttitle>메인페이지 </Sttitle>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Main;

const Sttitle = styled.div`
font-size: 14px;
line-height: 18px;
text-decoration: none solid rgb(38,38,38)
word-spacing:0;
background-color: #ffffff;
height: 119px;
width: 470px;
border: 1px solid #dbdbdb;
padding: 16px 0 16px 0;
min-height: auto;
min-width: auto;
border-radius: 10px;
display: block;
overflow: auto hidden;
transform: none;
box-sizing: border-box;
margin: 23px 0 0 33%;
`;
