import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { headerIcon } from "../shared/Icon/icons";
import { AiOutlineFontColors } from "react-icons/ai";
import { actionCreators as userActions } from '../redux/modules/user';

const Login = (props) => {
  const {history} = props
  const dispatch = useDispatch();

  const [nickname, setId] = useState("");
  const [password, setPwd] = useState("");

  const login = () => {

    dispatch(userActions.loginDB(nickname, password));
  }

  return (
    <div className="login" style= {{display: "flex"}}>
      <ImgContainer>
          <img src="img/iphone.png"  height="600px"></img>        
      </ImgContainer>
      <LoginContainer>
        <form>
          <center>
          <img
            src="img/insta_logo.png"            
            width="250"
            height="70px"
            margin= "50px auto"
          ></img>
          </center>
          <input
            placeholder="이메일"
            style={{
              border: "1px solid #C0C0C0",
              borderRadius: "5px",
              width: "310px",
              height: "35px",
              name: "Id",
              marginTop: "35px",
            }}
          ></input>
          <input
            placeholder="비밀번호"
            paddingTop="20px"
            style={{
              border: "1px solid #C0C0C0",
              borderRadius: "5px",
              width: "310px",
              height: "35px",
              name: "Pwd",
              type: "password",
              marginTop: "5px",
            }}
          ></input>
          <button
            paddingTop="20px"
            border="0 solid black"
            onClick={()=>{ history.push('/Main')}}
            style={{              
              boxShadow: "none",
              border: "0px",
              borderRadius: "5px",
              width: "320px",
              height: "40px",
              backgroundColor: "#62bdfa",
              color: "#ffffff",
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            로그인
          </button>
          <hr />

          <button
            style={{
              color: "#385185",
              border: "0px",
              width: "320px",
              height: "60px",
              backgroundColor: "#ffffff",
              fontSize: "16px",
              fontWeight: "600",
              marginTop: "25px",
            }}
          >
            <headerIcon.AiFillFacebook
              color="#385185"
              size="20"
              // ="10px" 위치움직이는거 어케해ㅠㅠ
            />
            Facebook으로 로그인
          </button>
          
            <p align="center">계정이 없으신가요?
            <button
            onClick={()=>{ history.push('/Signup')}}
            style={{              
              color: "#62bdfa",
              border: "0px",
              width: "80px",
              height: "40px",
              backgroundColor: "#ffffff",
              fontSize: "16px",
              fontWeight: "600",                          
            }}
            >가입하기</button></p>
          
          
        </form>
      </LoginContainer>
      {/* <StoreContainer>
        <center>
          <img src="img/apple.png"  height="30px" width="150px"></img>
          <img src="img/google.png"  height="30px" width="150px"></img>
        </center>
      </StoreContainer> */}
      
    </div>
  );
};


const ImgContainer = styled.div`  
  align-items: center;
  justify-content: space-around;
  /* float: left; */
  margin: 50px auto 50px 350px;
  width: 420px;  
  `;
  

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-flow: row nowrap;
  justify-content: space-around;
  /* float: right; */
  margin: 50px 400px 50px auto;
  border: 1px solid #c0c0c0;
  width: 300px;
  height: 450px;
  font-size: 16px;
  border-radius: 5px;
  padding: 44px 50px 10px 37px;
`;

// const StoreContainer = styled.div`
// display: flex;
// align-items: center;
// flex-direction: row;
// flex-flow: row nowrap;
// justify-content: space-around;
// margin: 50px auto 50px auto;
// `;

export default Login;
