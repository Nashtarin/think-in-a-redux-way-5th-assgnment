const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const store = require("../../app/store");

const initialState={
    post:{},
    loading:false,
    error:'',
    titleSplited:[]
 
    
}
const fetchPost = createAsyncThunk("postTitle/fetchPost", async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/99"
    );
    const post = await response.json();

    return post;
});
// const fetchSplitedTitle=createAsyncThunk("postTitle/fetchSplitedTitle",async()=>{
//    store.dispatch (postTitleSlice.split())
// })
const postTitleSlice=createSlice({
    name:"postTitle",
    initialState,
    
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.post = action.payload;
            state.titleSplited=action.payload.title.split(' ')
           
        });

        builder.addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.post = [];
        });
    },
})
module.exports=postTitleSlice.reducer;
module.exports.fetchTitleAction=postTitleSlice.actions;
module.exports.fetchPost = fetchPost;
// module.exports.fetchSplitedTitle = fetchSplitedTitle