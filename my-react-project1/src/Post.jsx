import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

function Post({title,body})
{
    return(
        <>
        <PostTitle title1={title}/>
        <PostBody body1={body}/>
        </>
    )
}
export default Post;