import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//components
import Post from "../components/Post";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.mainData);
  console.log(post_list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostDB());
    }
  }, []);
  return (
    <div
      style={{
        marginTop: "70px",
        backgroundColor: "#fafafa",
      }}
    >
      <Sidebar />
      <Header />
      <Sttitle>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IU_in_%22Love_Poem%22_Concert_in_Seoul_on_23rd_November_2019.jpg/800px-IU_in_%22Love_Poem%22_Concert_in_Seoul_on_23rd_November_2019.jpg"
            alt="profile-user-img"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "70%",
              overflow: "hidden",
              marginLeft: "15px",
            }}
          ></img>
          <img
            src="https://img.hankyung.com/photo/202103/03.21612581.1.jpg"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "70%",
              overflow: "hidden",
              marginLeft: "15px",
            }}
          ></img>
          <img
            src="https://img1.daumcdn.net/thumb/C176x176/?fname=https://k.kakaocdn.net/dn/bdZn3s/btrkuIAGMbk/vUXStutN5XcokTTL3zoSI1/img.png"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "70%",
              overflow: "hidden",
              marginLeft: "15px",
            }}
          ></img>
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MTRfMyAg/MDAxNjI2MjI4NTU3NzEx.IVADziglZFRsmbB9m5Oawkafp6Pu82WcPiRNGb9AaIwg.1bWeb78t_u0gSw8Apm4veBpO04F3Z4U3BNq8hnd7gDwg.JPEG.malesmile/%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC_%EC%A0%9C%EB%8B%88_%EC%97%84%EB%A7%88_1.jpg?type=w800"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "70%",
              overflow: "hidden",
              marginLeft: "15px",
            }}
          ></img>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6E2tflF7al6Pg2dEs-hf8kG3HBgZxQaoWA&usqp=CAU"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "70%",
              overflow: "hidden",
              marginLeft: "15px",
            }}
          ></img>
        </div>
      </Sttitle>
      {post_list &&
        post_list.map((p, idx) => {
          return <Post key={p.postId} post={post_list} {...p} />;
        })}
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
