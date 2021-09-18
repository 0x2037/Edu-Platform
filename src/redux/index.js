import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth';
import nofifyReducer from './notify';
import shopReducer from './shop';
import profileReducer from './profile';

const store=configureStore({
  reducer:{
    notify:nofifyReducer,
    auth:authReducer,
    shop:shopReducer,
    profile:profileReducer
  }
})

export default store;