import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { headerIcon } from "../shared/Icon/icons";
import Logo from "../shared/Icon/insta_logo.png";
import Detail from "./Detail";
import MenuO from "./MenuO";

const Post = (props) => {
  const postId = useParams();
  const history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //---------------------좋아요----------------------------
  const [Like, DisLike] = useState(false);

  const CLike = () => {
    DisLike(!Like);
  };

  const [Liked, LikedChange] = useState(0);
  // const [modalOpen2, setModalOpen2] = useState(false);
  // const openModal2 = () => {
  //   setModalOpen2(true);
  // };
  // const closeModal2 = () => {
  //   setModalOpen2(false);
  // };

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

  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  // console.log(openModal);
  // console.log(openModal2);

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
            <div style={{ fontSize: "20px", marginTop: "10px" }}>
              {props.username}
            </div>
            <Stmenu type="button" onClick={openModal}>
              <headerIcon.BiDotsHorizontalRounded />
            </Stmenu>
          </div>
        </div>
        <div>
          <img
            src={props.imgUrl}
            style={{
              width: "470px",
              height: "470px",
              borderTop: "none",
              borderbottom: "none",
            }}
          />
        </div>
        <StIcon>
          <div>
            <button>
              <div
                className="LikeIcon"
                onClick={() => {
                  LikedChange(Liked + 1);
                  CLike();
                }}
              >
                {/* // {()=> LikedChange(Liked+1); CLike();}> */}
                {Like ? (
                  <headerIcon.AiFillHeart
                    className="LikeIcon"
                    style={{
                      color: "red",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                ) : (
                  <headerIcon.AiOutlineHeart
                    className="LikeFillIcon"
                    style={{
                      marginRight: "15px",
                      fontSize: "30px",
                    }}
                  />
                )}
              </div>
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
        <div
          style={{ marginLeft: "10px" }}
          onClick={() => {
            LikedChange(Liked + 1);
          }}
        >
          <b>{}</b>님 <b>외 {Liked}</b>명이 좋아합니다.
        </div>
        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
          <b>{props.username}</b> {props.content}
        </div>
        <StcommentsIn
          onClick={() => {
            history.push("/detail/");
          }}
        >
          {/* <Detail open2={modalOpen2} close2={closeModal2} /> */}
          댓글 {getRandom(1, 50)}개 모두 보기
        </StcommentsIn>
        <div style={{ marginTop: "15px", marginLeft: "10px" }}>
          {props.modifiedAt}
        </div>
        <Stcomments placeholder="댓글 달기..." multiLine></Stcomments>
        <StcommentsBtn type="submit">게시</StcommentsBtn>
      </Stform>
      <MenuO open2={modalOpen} close2={closeModal} />
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

const Stform = styled.div`
  border: 1px solid #aaaaaa;
  margin: 15px 815px 0 627px;
  height: 780px;
  width: 472px;
  border-radius: 10px;
  background-color: #ffffff;
`;
