import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api/api";
import "moment";

// actions

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";

// createActions
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

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
    try {
      const post_list = await api.get("/api/posts");
      console.log(post_list.data.mainData);
      dispatch(getPost(post_list.data.mainData));
    } catch (error) {
      console.log("게시글을 불러오는데 실패 했습니다.", error);
    }
  };
};

const addPostDB = (content = "", imgUrl = "", username = "") => {
  return async function (dispatch, getState, { history }) {
    const form = new FormData();
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };
    form.append("content", content);
    form.append("imgUrl", imgUrl);
    form.append("username", username);
    api
      .post("api/post", form, config)
      .then((response) => {
        console.log(response);
        console.log("게시글이 작성 되었습니다.😉");
        dispatch(addPost(response.data.mainData));
        history.replace("/main");
      })
      .catch((error) => {
        console.log("게시글 작성에 문제가 발생하였습니다.🤦‍♀️", error);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.mainData = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  getPost,
  addPost,
  getPostDB,
  addPostDB,
};

export { actionCreators };
