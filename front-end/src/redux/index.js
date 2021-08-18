import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  userLogged: false,
};

const userStatusReducer = (state = initialState, action) => {
  if (action.type === "userStatus") {
    return {
      status: !state.status,
    };
  }
  return state;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userStatusReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default store;
