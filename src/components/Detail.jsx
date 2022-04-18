import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

import Logo from "../shared/Icon/insta_logo.png";
import { headerIcon } from "../shared/Icon/icons";
import "../css/Addpost.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const newDate = new Date(+new Date() + 3240 * 10000)
  .toISOString()
  .replace("T", " ")
  .replace(/\..*/, "");

const Detail = (props) => {
  const history = useHistory();
  const { open2, close2 } = props;
  const [이름, 이름변경] = useState(["T없이맑은I", "ㅎr늘색풍선"]);

  return (
    <>
      {/* <div className={open2 ? "openModal modal" : "modal"}> */}
      {/* {open2 ? ( */}
      <section>
        <main className="BackgroundOpacity">
          <Contain>
            <headerIcon.ImCancelCircle
              className="CancelAddPost"
              style={{ fontSize: "30px", marginTop: "10px" }}
              color="black"
              onClick={() => history.push("/main")}
            />
            <StPostimg src={Logo} />
            <div>
              <Stside>
                <div style={{ display: "flex" }}>
                  <headerIcon.BsPersonCircle
                    style={{
                      color: "#cdcdcd",
                      fontSize: "40px",
                      margin: "10px",
                    }}
                  />
                  <div style={{ fontSize: "14px", marginTop: "15px" }}>
                    {이름[0]}
                  </div>
                </div>
              </Stside>
              <div
                style={{
                  border: "1px solid pink",
                  width: "400px",
                  height: "500px",
                }}
              >
                댓글
              </div>
              <StBtn
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <headerIcon.FiHeart style={{ marginRight: "15px" }} />
                  <headerIcon.IoChatbubbleOutline
                    style={{ marginRight: "15px" }}
                  />
                  <headerIcon.IoPaperPlaneOutline />
                </div>
                <div>
                  <headerIcon.BiBookmark />
                </div>
              </StBtn>
              <div style={{ marginTop: "15px", marginLeft: "10px" }}>
                좋아요 135개
              </div>
              <div
                style={{
                  marginTop: "15px",
                  marginLeft: "10px",
                  fontSize: "13px",
                  color: "#aaaaaa",
                }}
              >
                {newDate}
              </div>
              <Stcomment placeholder="댓글 달기..." multiLine></Stcomment>
              <StcomBtn type="submit">게시</StcomBtn>
            </div>
          </Contain>
        </main>
      </section>
      {/* ) : null} */}
      {/* </div> */}
    </>
  );
};
export default Detail;

const Contain = styled.div`
  background-color: white;

  display: flex;
  width: 60vw;
  height: 80vh;
  border: 1px solid green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StPostimg = styled.img`
  border: 1px solid red;
  /* width: 600px;
  height: 700px;
  margin-right: 100px; */

  display: inline-block;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  object-fit: cover;
  border-radius: 5px;
  object-fit: fill;
`;

const Stside = styled.div`
  display: flex;
  border: 1px solid blue;
  background-color: white;

  width: 400px;
  justify-content: space-between;
`;

const Stmenu = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border: none;
  margin-top: 10px;
  font-size: 25px;
`;

const StBtn = styled.div`
  background-color: white;

  margin: 13px;
  font-size: 20px;
`;

const Stcomment = styled.input`
  width: 340px;
  height: 45px;
  margin-top: 27px;
  border: 1px solid #aaaaaa;
  border-left: none;
  border-right: none;
  border-bottom: none;
`;

const StcomBtn = styled.button`
  width: 57px;
  height: 50px;
  padding-bottom: 7px;
  border: 1px solid #aaaaaa;
  border-left: none;
  border-right: none;
  border-bottom: none;
  background-color: white;
  color: #00ffff;
  font-weight: bold;
`;
