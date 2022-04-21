import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import api from "../../api/api";
import { setToken } from "../../shared/token";
import jwtDecode from "jwt-decode";
import axios from "axios";

// action
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creator
const login = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, () => ({}));

// initialState
const initialState = {
  user: [],
  is_login: false,
};

//------------------middleware------------------------------

//-------------로그인-------------------
const loginDB = (email, password) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.38.116.203/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        const token = res.headers.authorization;
        console.log(token);
        setToken(token);

        const DecodedToken = jwtDecode(token);
        console.log(DecodedToken);
        console.log(DecodedToken.sub);

        localStorage.setItem("email", email);
        localStorage.setItem("username", DecodedToken.sub);

        dispatch(
          login({
            is_login: true,
            email: email,
            username: DecodedToken.sub,
            //위치불확실 콘솔찍어서 확인
          })
        );
        history.replace("/main");
        console.log("로그인성공!!");
      })
      .catch((error) => {
        // console.log(error)
      });
  };
};

// const loginCheckDB = () => {
//   return function (dispatch, getState, { history }) {
//     const username = localStorage.getItem("username");
//     const tokenCheck = document.cookie;
//     if (tokenCheck) {
//       dispatch(login({ username: username }));
//     } else {
//       dispatch(logOut());
//     }
//   };
// };

//------------회원가입-------------------
const signUpDB = (email, username, password) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.38.116.203/user/signup", {
        email: email,
        username: username,
        password: password,
      })
      .then((res) => {
        window.alert("회원가입이 완료되었습니다!");
        history.replace("/");
      })
      .catch((err) => {
        window.alert(err.response.data.msg);
      });
  };
};

//-----------------------reducer------------------------
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        // setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;

        console.log("action.payload.user", action.payload.user);
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        // deleteCookie("is_login");
        draft.user = null;

        draft.is_login = false;
        // window.location.replace("/");
        // console.log("로그아웃합니다")
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  login,
  loginDB,
  getUser,
  signUpDB,
  logOut,
  //   loginCheckDB,
};

export { actionCreators };

// //----------로그인 확인--------------
// const loginCheckDB = () => {
//   const token = localStorage.getItem("token");
//   return function (dispatch, getState, { history }) {
//     api
//       .post(
//         "/users/me",
//         {},
//         {
//           headers: {
//             contentType: "applicaton/json;charset=UTF-8",
//             accept: "application/json",
//             authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((res) => {
//         dispatch(
//           login({
//             nickname: res.data.nickname,
//           })
//         );
//       })
//       .catch((err) => {
//         console.log("로그인 확인 실패", err);
//       });
//   };
// };
