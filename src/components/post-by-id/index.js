import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPostById } from "../../store/reducers/post";
import { fetchPostById } from "../../utils/thunks";
import Newsletter from "../common/newsletter";

import "./post-by-id.css";

const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);

  useEffect(() => {
    let controller = new AbortController();
    dispatch(fetchPostById({ postId, controller }));

    return () => {
      controller?.abort();
      dispatch(clearPostById());
    };
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
      <Newsletter />
    </>
  );
};

export default Post;
