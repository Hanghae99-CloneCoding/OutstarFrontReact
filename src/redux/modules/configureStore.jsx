import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";


import user from "./user" 


export const history = createBrowserHistory();
const rootReducer = combineReducers({
    user, 
    router: connectRouter(history),
  });
  
  const middlewares = [thunk.withExtraArgument({history:history})];
  
  // 지금이 어느 환경인 지 알려줌 (개발환경, 프로덕션(배포)환경 ...)
  const env = process.env.NODE_ENV;
  
  // 개발환경에서는 로거
  if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }
  
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  
  const store = createStore(rootReducer, enhancer);
  
  export default store;