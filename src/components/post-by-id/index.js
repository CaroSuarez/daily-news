import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../utils/thunks";

import "./post-by-id.css";

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
    <>
      {postsState.postById ? (
        <div className="post-by-id">
          <h1>{postsState.postById.title}</h1>
          <img src={postsState.postById.imagexl} alt="post image" />
          <div
            dangerouslySetInnerHTML={{
              __html: postsState.postById.content,
            }}
          />
        </div>
      ) : null}
      {postsState.loading ? <span>Loading...</span> : null}
    </>
  );
};

export default Post;
