import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { headerIcon } from "../shared/Icon/icons";
import "../css/Addpost.css";

const Addpost = (props) => {
  console.log(props);

  const history = useHistory();
  const dispatch = useDispatch();
  const userName = localStorage.getItem("username");

  // const is_login = useSelector((state) => state.user.is_login);

  const fileInput = React.useRef();
  const selectFile = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const [content, setContents] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const changeContents = (e) => {
    setContents(e.target.value);
    console.log(e.target.value);
  };
  const changeImg = (e) => {
    setImgUrl(e.target.value);
    console.log(e.target.value);
  };

  const addPost = () => {
    let imgUrl = fileInput.current.files[0];
    dispatch(postActions.addPostDB({ content: content, imgUrl: imgUrl }));
    console.log(content);
  };

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
              <div className="NewPostCreate">새 게시물 만들기</div>
              <button className="NewPostAdd" onClick={addPost}>
                공유하기
              </button>
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
                    <label className="InputLabelText" onChange={changeImg}>
                      사진과 동영상을 여기에 끌어다 놓으세요
                    </label>
                    <div className="UploadFileBox">
                      <label htmlFor="ImageInput">컴퓨터에서 선택</label>
                      <input
                        onChange={selectFile}
                        ref={fileInput}
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
                  <div className="RightBox1">{userName}</div>
                  <input
                    type="text"
                    value={content}
                    onChange={changeContents}
                    placeholder="문구 입력..."
                    className="RightBox2"
                  />
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
