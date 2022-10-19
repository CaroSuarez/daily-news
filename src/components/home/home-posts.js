import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../utils/thunks";
import PostThumbnail from "../post-thumbnail";

import "./home-posts.css";

const HomePosts = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let controller = new AbortController(); // clean up function for the request
    dispatch(
      fetchPosts({ page: page, limit: 6, order: "asc", controller: controller })
    );

    return () => controller?.abort();
  }, [page]);

  console.log(postsState.articles);

  return (
    <div className="home-posts">
      {postsState?.articles.map((post) => (
        <PostThumbnail key={post.id} data={post} />
      ))}
      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        Add page
      </button>
    </div>
  );
};

export default HomePosts;
