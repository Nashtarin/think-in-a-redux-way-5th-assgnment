const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } =require("redux-logger") ;
const logger = createLogger();
const postTitleReducer = require("../feature/posttitle/postTitleSlice");
const store = configureStore({
    reducer: {
      title:postTitleReducer
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares()
});
module.exports=store

