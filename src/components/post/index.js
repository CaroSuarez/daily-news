import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../utils/thunks";

const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);

  useEffect(() => {
    let controller = new AbortController();
    dispatch(fetchPostById({ postId, controller }));

    return () => controller?.abort();
  }, []);

  return (
    <>{postsState.postById ? <div>{postsState.postById.title}</div> : null}</>
  );
};

export default Post;
