import React from "react";
import styled from "styled-components";
import "../shared/menu.css";

const Menu = (props) => {
  const { open3, close3 } = props;

  const Alert = () => {
    window.alert("아직 준비 중인 기능입니다");
  };

  return (
    <>
      <div className={open3 ? "openModal modal" : "modal"}>
        {open3 ? (
          <section>
            <main>
              <ModalboxR onClick={Alert}>게시물 수정</ModalboxR>
              <ModalboxR onClick={Alert}>게시물 삭제</ModalboxR>
              <Modalbox onClick={Alert}>게시물로 이동</Modalbox>
              <Modalbox onClick={Alert}>공유 대상...</Modalbox>
              <Modalbox onClick={Alert}>링크 복사</Modalbox>
              <Modalbox onClick={Alert}>퍼가기</Modalbox>
              <Modalbox onClick={close3}>취소</Modalbox>
            </main>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default Menu;

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
