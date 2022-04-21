import React from "react";
import styled from "styled-components";
import "../css/menu.css";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { useParams } from "react-router-dom";

const MenuO = (props) => {
  console.log(props);
  const params = useParams();
  console.log(params);
  const post_index = params.postId;
  console.log(post_index);
  const dispatch = useDispatch();
  const history = useHistory();
  const post_list = useSelector((state) => state.post.mainData);
  console.log(post_list);
  const { open2, close2 } = props;

  const Alert = () => {
    window.alert("아직 준비 중인 기능입니다");
  };
  const deletePost = () => {
    console.log(post_list.post_index);

    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      return dispatch(postActions.deletePostDB(post_list.post_index));
    }
  };

  return (
    <>
      <div className={open2 ? "openModal modal" : "modal"}>
        {open2 ? (
          <section>
            <main>
              <ModalboxR onClick={Alert}>게시물 수정</ModalboxR>
              <ModalboxR onClick={deletePost}>게시물 삭제</ModalboxR>
              <Modalbox onClick={Alert}>게시물로 이동</Modalbox>
              <Modalbox onClick={Alert}>공유 대상...</Modalbox>
              <Modalbox onClick={Alert}>링크 복사</Modalbox>
              <Modalbox onClick={Alert}>퍼가기</Modalbox>
              <Modalbox onClick={close2}>취소</Modalbox>
            </main>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default MenuO;

const ModalboxR = styled.button`
  line-height: 1.5;
  margin: 0;
  cursor: pointer;
  min-height: 48px;
  padding: 4px 8px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  border: solid 0.1px #dbdbdb;
  width: 100%;
  color: rgba(var(--i30, 237, 73, 86), 1);
  font-weight: 700;
  background-color: white;
`;

const Modalbox = styled.button`
  line-height: 1.5;
  margin: 0;
  cursor: pointer;
  min-height: 48px;
  padding: 4px 8px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  border: solid 0.1px #dbdbdb;
  width: 100%;
  background-color: white;
`;