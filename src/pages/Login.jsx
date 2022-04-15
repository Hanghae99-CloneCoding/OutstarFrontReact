import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { IconName } from "react-icons/ai";


const Login = (props) => {


  return (
    <ImgContainer>
      <div className="img">
        <img src="img/iphone.png" back_size="100% 100%" height="500px"></img>
      </div>
      <LoginContainer>
        <form>
          <img 
            src="img/insta_logo.png" 
            back_size="100% 100%" 
            width="200" 
            height="60px" 
            >
            </img>
          <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
          <button 
            margin="10px 0px 0px"
            height="60px">
              
                Facebook으로 로그인
          </button>
          <input
            placeholder="이메일"
            width="50%"
            height="60px"                        
            name="Id"
          ></input>
          <input
            placeholder="비밀번호"
            width="50%"
            height="60px"
            name="Pwd"
            type="password"
          ></input>
          <button margin="10px 0px 0px">로그인</button>
        </form>
      </LoginContainer>
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 900px;
margin-left: 500px;

`;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
padding-right: 50px;
padding-left: 50px;
margin-right: 500px;
justify-content: space-between;
border: 1px solid #C0C0C0;
width: 200px;
height: 450px;
font-size: 18px;
`;


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


export default Login;
