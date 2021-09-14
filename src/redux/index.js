import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth';
import nofifyReducer from './notify';
import shopReducer from './shop';

const store=configureStore({
  reducer:{
    notify:nofifyReducer,
    auth:authReducer,
    shop:shopReducer,
  }
})

export default store;