import React, { useState } from "react";

import styled from "styled-components";
import { headerIcon } from "../shared/Icon/icons";

export const Sidebar = () => {
  const [이름, 이름변경] = useState(["T없이맑은I", "ㅎr늘색풍선"]);
  if (window.location.pathname === "/") return null;
  if (window.location.pathname === "/signup") return null;
  if (window.location.pathname === "/addpost") return null;

  return (
    <StTitle>
      <StProfile>
        <headerIcon.BsPersonCircle
          style={{ color: "#cdcdcd", fontSize: "60px" }}
        />
        <Stusername>{이름[0]}</Stusername>
        <button>전환</button>
      </StProfile>

      <Stmiddle>
        <StP>회원님을 위한 추천</StP>
        <StP2>모두 보기</StP2>
      </Stmiddle>
      <div style={{ padding: "10px" }}>
        <StProfile
          style={{ justifyContent: "space-between", marginBottom: "10px" }}
        >
          <headerIcon.BsPersonCircle
            style={{ color: "#cdcdcd", fontSize: "35px" }}
          />
          <button>팔로우</button>
        </StProfile>
        <StProfile
          style={{ justifyContent: "space-between", marginBottom: "10px" }}
        >
          <headerIcon.BsPersonCircle
            style={{ color: "#cdcdcd", fontSize: "35px" }}
          />
          <button>팔로우</button>
        </StProfile>
        <StProfile
          style={{ justifyContent: "space-between", marginBottom: "10px" }}
        >
          <headerIcon.BsPersonCircle
            style={{ color: "#cdcdcd", fontSize: "35px" }}
          />
          <button>팔로우</button>
        </StProfile>
        <StProfile
          style={{ justifyContent: "space-between", marginBottom: "10px" }}
        >
          <headerIcon.BsPersonCircle
            style={{ color: "#cdcdcd", fontSize: "35px" }}
          />
          <button>팔로우</button>
        </StProfile>
        <StProfile
          style={{ justifyContent: "space-between", marginBottom: "10px" }}
        >
          <headerIcon.BsPersonCircle
            style={{ color: "#cdcdcd", fontSize: "35px" }}
          />
          <button>팔로우</button>
        </StProfile>
      </div>
      <footer style={{ fontSize: "13px" }}>
        &copy; {new Date().getFullYear()} 10조_CloneCoding
      </footer>
    </StTitle>
  );
};

const StTitle = styled.div`
  margin-right: 60px;
  font-size: 28px;
  margin-top: 10px;
  position: fixed;
  right: 18%;
  padding: 50px;
`;
const Stusername = styled.div`
  margin: 20px 120px 0px 20px;
  font-size: 15px;
`;

const StProfile = styled.div`
  display: flex;
  button {
    border: 0px none;
    background-color: white;
    font-weight: bold;
    color: #00c3ff;
  }
`;

const Stmiddle = styled.div`
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  margin-top: 10px;
`;

const StP = styled.p`
  font-size: 12px;
  color: #a4a4a4;
`;
const StP2 = styled.p`
  font-size: 12px;
  color: black;
  font-weight: bold;
`;
