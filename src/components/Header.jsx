import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// icons
import { headerIcon } from "../shared/Icon/icons";
import Logo from "../shared/Icon/insta_logo.png";

export const Header = () => {
  const history = useHistory();
  if (window.location.pathname === "/") return null;
  if (window.location.pathname === "/signup") return null;
  if (window.location.pathname === "/addpost") return null;
  return (
    <Contain>
      <Icon1 size="5" src={Logo} onClick={() => history.push("/main")} />
      <Stinput placeholder=" 🔍 검색" />
      <Icon2>
        <Icon3>
          <headerIcon.HiHome />
        </Icon3>
        <Icon4>
          <headerIcon.IoPaperPlaneOutline />
        </Icon4>
        <Icon5>
          <headerIcon.FaRegPlusSquare
            onClick={() => {
              history.push("/addpost");
            }}
          />
        </Icon5>
        <Icon6>
          <headerIcon.ImCompass2 />
        </Icon6>
        <Icon7>
          <headerIcon.FiHeart />
        </Icon7>
        <Icon8>
          <headerIcon.BsPersonCircle style={{ color: "#cdcdcd" }} />
        </Icon8>
      </Icon2>
    </Contain>
  );
};

const Contain = styled.header`
  border: 0.1px solid #c1c1c1;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Stinput = styled.input`
  border: 0px solid gray;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 12px;
  width: 300px;
  height: 1px;
`;

const Icon1 = styled.img`
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
  background-size: cover;
  object-fit: contain;
  width: 100px;
  height: 50px;
`;

const Icon2 = styled.div`
  display: flex;
  margin-top: 3.5px;
`;
const Icon3 = styled.div`
  margin: 10px;
  font-size: 28px;
`;
const Icon4 = styled.div`
  margin: 10px;
  font-size: 28px;
`;
const Icon5 = styled.div`
  margin: 10px;
  font-size: 28px;
`;
const Icon6 = styled.div`
  font-size: 28px;
  margin: 10px;
`;
const Icon7 = styled.div`
  font-size: 28px;
  margin: 10px;
`;

const Icon8 = styled.div`
  font-size: 28px;
  margin-top: 10px;
`;
