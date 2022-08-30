const store= require('./app/store')
const { fetchPost,fetchSplitedTitle } = require('./feature/posttitle/postTitleSlice')
const {fetchTitleAction}=require('./feature/posttitle/postTitleSlice')






store.subscribe(()=>{

})
store.dispatch(fetchPost())


