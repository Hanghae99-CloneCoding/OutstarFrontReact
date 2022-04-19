import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { headerIcon } from "../shared/Icon/icons";
import { AiOutlineFontColors } from "react-icons/ai";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from '../redux/modules/user';



const Signup = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const [email, setId] = useState("");
  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");
  

  const signup = () => {
    dispatch(userActions.signUpDB(email, username, password));
  }



  return (
    <div className="signup">
      <SignInContainer>
        <form>
          <center>
            <img
              src="img/insta_logo.png"
              width="250"
              height="70px"
              margin="50px auto"
            ></img>
          </center>
          <p align="center">친구들의 사진과 동영상을 보려면</p>
          <p align="center">가입하세요</p>
          <button
            style={{
              color: "#fff",
              border: "0px",
              width: "315px",
              height: "35px",
              backgroundColor: "#0095f6",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "600",
              marginTop: "5px",
              marginBottom: "15px",
            }}
          >
            <headerIcon.AiFillFacebook
              color="#fff"
              size="20"
              // ="10px" 위치움직이는거 어케해ㅠㅠ
            />
            Facebook으로 로그인
          </button>
          <hr />
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={email}
            placeholder="이메일"
            style={{
              border: "1px solid #C0C0C0",
              borderRadius: "5px",
              width: "310px",
              height: "35px",
              name: "Id",
              marginTop: "15px",
            }}
          ></input>
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={username}
            placeholder="성명"
            style={{
              border: "1px solid #C0C0C0",
              borderRadius: "5px",
              width: "310px",
              height: "35px",
              name: "Id",
              marginTop: "5px",
            }}
          ></input>
          <input
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={password}
            placeholder="비밀번호"
            paddingTop="20px"
            type= "password"
            style={{
              border: "1px solid #C0C0C0",
              borderRadius: "5px",
              width: "310px",
              height: "35px",
              name: "Pwd",
              marginTop: "5px",
            }}
          ></input>
          <button
            paddingTop="20px"
            border="0 solid black"
            onClick={signup}
            type="button"
            style={{
              boxShadow: "none",
              border: "0px",
              borderRadius: "5px",
              width: "320px",
              height: "40px",
              backgroundColor: "#62bdfa",
              color: "#ffffff",
              marginTop: "35px",
              marginBottom: "5px",
            }}
          >
            가입
          </button>

          <p align="center">
            계정이 있으신가요?
            <button
              onClick={() => {
                history.push("/");
              }}
              style={{
                color: "#0095f6",
                border: "0px",
                width: "80px",
                height: "60px",
                backgroundColor: "#ffffff",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "5px",
              }}
            >
              {" "}
              로그인
            </button>
          </p>
        </form>
      </SignInContainer>
      <LogContainer>
        <form></form>
      </LogContainer>
      {/* <form >
        <p>계정이 없으신가요?</p><p>가입하기</p>
      </form> */}
    </div>
  );
};

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  /* justify-content: space-around; */
  /* float: center; */
  /* margin-right: 330px; */
  margin: 50px auto;
  border: 1px solid #c0c0c0;
  width: 300px;
  height: 550px;
  font-size: 16px;
  border-radius: 5px;
  padding: 44px 50px 10px 37px;
`;

const LogContainer = styled.div``;

// const Login = () => {
//   return (
//     <Grid width="375px">
//       <Grid bg="#fff" border="1px solid #DBDBDB">
//         <Grid center="center" padding="34px 42px 0px">
//           <Logo src={logo} />
//         </Grid>
//         <Grid is_flex padding="34px 42px" column="column" gap="10px">
//           <Input
//             placeholder="이메일"
//             width="100%"
//             name="IdState"

//           ></Input>
//           <Input
//             placeholder="비밀번호"
//             width="100%"
//             name="PwState"
//             type="password"

//           ></Input>
//           <Button
//             margin="10px 0px 0px"
//             className={succeed === false ? "unActiveBtn" : ""}

//           >
//             로그인
//           </Button>
//         </Grid>
//       </Grid>
//       <Button
//         border="1px solid #DBDBDB"
//         margin="10px 0px 0px"
//         padding="24px 42px"
//         bg="#fff"
//         color="#000"

//       >
//         계정이 없으신가요?{" "}
//         <span style={{ color: "#0095F6", fontWeight: "bold" }}>가입하기</span>
//       </Button>
//       {noneDate ? <Warning>모든 입력해 주십시오</Warning> : ""}
//     </Grid>
//   );
// };

// const SignIn = props => {
//   return (
//     <SenterWep>
//       <Grid is_flex justifyContent gap="30px" width="auto">
//         <LoginImg src={signin_img} />
//         <SignBox />
//       </Grid>
//     </SenterWep>
//   );
// };
// const LoginImg = styled.img`
//   display: block;
//   @media (max-width: 935px) {
//     display: none;
//   }
// `;
// const SenterWep = styled.div`
//   width: auto;
//   height: atuo;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// `;
// const Logo = styled.img`
//   width: 150px;
//   height: 23%;
//   cursor: pointer;
// `;

// const Login = () => {
//   return <div>Login</div>;
// };

export default Signup;
