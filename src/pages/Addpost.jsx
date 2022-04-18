import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

import { headerIcon } from "../shared/Icon/icons";
import "../css/Addpost.css";

const Addpost = () => {
  const history = useHistory();
  return (
    <>
      <div className="BackgroundOpacity">
        <div>
          <headerIcon.ImCancelCircle
            className="CancelAddPost"
            fontSize="5"
            onClick={() => history.push("/main")}
          />
          <div className="FakeModalAddPost" style={{ width: "1000px" }}>
            <div>
              <text className="NewPostCreate">새 개시물 만들기</text>
              <hr className="TopLine" />
            </div>
            <div style={{ display: "flex" }}>
              <div className="ImgSideBox">
                <div>
                  <headerIcon.HiOutlinePhotograph
                    className="PhotoIcon"
                    fontSize="5"
                  />
                  <headerIcon.CgPlayButtonR className="PlayIcon" fontSize="5" />
                </div>
                <div className="InputGuideText" style={{ display: "flex" }}>
                  <div className="InputImgBox">
                    <label className="InputLabelText">
                      사진과 동영상을 여기에 끌어다 놓으세요
                    </label>
                    <div className="UploadFileBox">
                      <label for="ImageInput">컴퓨터에서 선택</label>
                      <input
                        type="file"
                        id="ImageInput"
                        name="ImageInput"
                        style={{ display: "none" }}
                        accept="image/png, image/jpeg, , image/jpg, image/gif"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="PostSide">
                  <div className="RightBox1">닉네임</div>
                  <input placeholder="문구 입력..." className="RightBox2" />
                  <div style={{ display: "flex" }}>
                    <input placeholder="위치 추가" className="RightBox3" />
                    <headerIcon.FiMapPin className="RigthIcon" />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="RightBox4">접근성</div>
                    <headerIcon.BiChevronDown className="RigthIcon2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpost;

const PostDetail = styled.div`
  border: 1px solid red;
  width: 390px;
  margin: 0 0 0 50px;
`;
