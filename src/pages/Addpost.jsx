import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { headerIcon } from "../shared/Icon/icons";
import "../css/Addpost.css";

const Addpost = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const [content, setContents] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const changeContents = (e) => {
    setContents.apply(e.target.value);
    console.log(e.target.value);
  };
  const changeImg = (e) => {
    setImgUrl.apply(e.target.value);
    console.log(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostDB(content, imgUrl));
  };
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
              <div className="NewPostCreate">새 개시물 만들기</div>
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
                    <label className="InputLabelText">
                      사진과 동영상을 여기에 끌어다 놓으세요
                    </label>
                    <div className="UploadFileBox">
                      <label htmlFor="ImageInput">컴퓨터에서 선택</label>
                      <input
                        onChange={changeImg}
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
                  <input
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
