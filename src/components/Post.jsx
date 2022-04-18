import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { headerIcon } from "../shared/Icon/icons";
import Logo from "../shared/Icon/insta_logo.png";
import Detail from "./Detail";
import MenuX from "./MenuX";

const Post = () => {
  const history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [modalOpen2, setModalOpen2] = useState(false);
  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  // window.addEventListener("keyup", (e) => {
  //   if (setModalOpen(false) && e.key === "Escape") {
  //     setModalOpen(true);
  //   }
  // });
  // window.addEventListener("keyup", (e) => {
  //   if (setModalOpen2(false) && e.key === "Escape") {
  //     setModalOpen2(true);
  //   }
  // });
  const newDate = new Date(+new Date() + 3240 * 10000)
    .toISOString()
    .replace("T", " ")
    .replace(/\..*/, "");
  const [이름, 이름변경] = useState(["T없이맑은I", "ㅎr늘색풍선"]);
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  console.log(openModal);
  console.log(openModal2);

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Stform>
        <div
          style={{
            height: "60px",
            paddingTop: "10px",
          }}
        >
          <div style={{ display: "flex" }}>
            <headerIcon.BsPersonCircle
              style={{
                color: "#cdcdcd",
                fontSize: "40px",
                margin: " 10px",
              }}
            />
            <div style={{ fontSize: "14px" }}>{이름[0]}</div>
            <Stmenu>
              <headerIcon.BiDotsHorizontalRounded onClick={openModal} />
            </Stmenu>
          </div>
        </div>
        <div>
          <img
            src={Logo}
            style={{
              border: "1px solid #aaaaaa",
              width: "470px",
              height: "470px",
            }}
          />
        </div>
        <StIcon>
          <div>
            <button>
              <headerIcon.FiHeart style={{ marginRight: "15px" }} />
            </button>
            <button>
              <headerIcon.IoChatbubbleOutline style={{ marginRight: "15px" }} />
            </button>
            <button>
              <headerIcon.IoPaperPlaneOutline />
            </button>
          </div>
          <button>
            <headerIcon.BiBookmark />
          </button>
        </StIcon>
        <div style={{ marginLeft: "10px" }}>
          <b>{이름[1]}</b>님 <b>외 {getRandom(1, 1000)}</b>명이 좋아합니다.
        </div>
        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
          <b>{이름[0]}</b> 콘솔을 많이 찍어보자...😢
        </div>
        <StcommentsIn
          onClick={() => {
            history.push("/detail");
          }}
        >
          {/* <Detail open2={modalOpen2} close2={closeModal2} /> */}
          댓글 {getRandom(1, 50)}개 모두 보기
        </StcommentsIn>
        <div style={{ marginTop: "15px", marginLeft: "10px" }}>{newDate}</div>
        <Stcomments placeholder="댓글 달기..." multiLine></Stcomments>
        <StcommentsBtn type="submit">게시</StcommentsBtn>
      </Stform>
      <MenuX open={modalOpen} close={closeModal} />
    </div>
  );
};

export default Post;

const Stmenu = styled.button`
  margin-left: 300px;
  border: none;
  background-color: white;
  font-size: 17px;
`;

const StIcon = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  button {
    border: none;
    background-color: white;
    font-size: 25px;
  }
`;

const StcommentsIn = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  color: #aaaaaa;
`;

const Stcomments = styled.input`
  margin-top: 21px;
  height: 38px;
  width: 420px;
  border: 1px solid #aaaaaa;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-bottom-left-radius: 10px;
`;

const StcommentsBtn = styled.button`
  width: 47px;
  height: 41px;
  padding-bottom: 3px;
  border: 1px solid #aaaaaa;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-bottom-right-radius: 10px;
  color: #00ffff;
  font-weight: bold;
  background-color: #ffffff;
`;

const Stform = styled.form`
  border: 1px solid #aaaaaa;
  margin: 15px 815px 0 627px;
  height: 780px;
  width: 472px;
  border-radius: 10px;
  background-color: #ffffff;
`;
