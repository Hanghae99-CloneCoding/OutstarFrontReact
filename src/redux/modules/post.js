import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api/api";
import "moment";

// actions

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const SET_PREVIEW = "SET_PREVIEW";
const DELETE_POST = "DELETE_POST";

// createActions
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));

//initialState
const initialState = {
  mainData: [],
  paging: { page: 1, size: 2 },
  is_loading: false,
};
const initialPost = [
  {
    postId: 1,
    username: "룽지",
    content: "강아지 ",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1oaPJauUiuet7pAXY5eqJDKdnxE1XFQdDw&usqp=CAU",
    modifiedAt: "",
    comment: "멍멍이",
  },
];

// middleware actions
const getPostDB = () => {
  return async function (dispatch, getState, { history }) {
    const TOKEN = localStorage.getItem("token");

    await api({
      method: "get",
      url: "/api/posts",
      data: {},
      headers: {
        "Content-Type": "application/json;charset-UTF-8",
        authorization: TOKEN,
      },
    }).then((res) => {
      console.log(res);
      dispatch(getPost(res.data.mainData));
    });

    // try {
    //   const post_list = await api.get("/api/posts"
    //   // , headers:{
    //   //   "Content-Type": "application/json;charset-UTF-8",
    //   //   authorization: TOKEN,
    //   // }
    //   );
    //   console.log(post_list.data.mainData);
    //   dispatch(getPost(post_list.data.mainData));
    // } catch (error) {
    //   console.log("게시글을 불러오는데 실패 했습니다.", error);
    // }
  };
};

const addPostDB = (post) => {
  console.log(post);
  const token = localStorage.getItem("token");
  return async function (dispatch, getState, { history }) {
    const form = new FormData();
    form.append("imgUrl", post.imgUrl);
    form.append(
      "content",
      new Blob([JSON.stringify({ content: post.content })], {
        type: "application/json",
      })
    );
    console.log("여기까지 성공!!");
    await api
      .post("/api/post", form, {
        headers: {
          Accept: "*/*",
          "Content-Type": `multipart/form-data`,
          Authorization: `${token}`,
        },
        // await api({
        //   method: "post",
        //   url: "/api/post",
        //   data: form,
        //   headers: {
        //     "content-type": "multipart/form-data",
        //     authorization: `${token}`,
        //   },
      })
      .then((response) => {
        console.log(response);
        console.log("게시글이 작성 되었습니다.😉");
        dispatch(addPost(post));
        history.replace("/main");
      })
      .catch((error) => {
        console.log("게시글 작성에 문제가 발생하였습니다.🤦 ♀️", error);
      });
  };
};

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log("게시물 정보가 없습니다.");
      return;
    }
    api
      .deletePost(postId)
      .then(() => {
        dispatch(deletePost(postId));
      })
      .catch((error) => {
        console.log("게시글 삭제에 실패했습니다.", error);
      })
      .then(() => {
        window.location.reload();
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.mainData = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(state.action);
        draft.mainData.unshift(action.payload.post);
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.filter((p) => p.id !== action.payload.postId);
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  addPost,
  getPostDB,
  addPostDB,
  deletePostDB,
};

export { actionCreators };
