import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth';
import nofifyReducer from './notify';

const store=configureStore({
  reducer:{
    notify:nofifyReducer,
    auth:authReducer
  }
})

export default store;