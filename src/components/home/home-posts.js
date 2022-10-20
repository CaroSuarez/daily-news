import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../utils/thunks";
import PostThumbnail from "../post-thumbnail";

import "./home-posts.css";

const HomePosts = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(postsState.page || 1);

  useEffect(() => {
    let controller = new AbortController(); // clean up function for the request
    if (currentPage !== postsState.page) {
      dispatch(
        fetchPosts({
          page: currentPage,
          limit: 6,
          order: "asc",
          controller: controller,
        })
      );
    }
    return () => controller?.abort();
  }, [currentPage]);

  return (
    <>
      <div className="home-posts">
        {postsState?.articles.map((post) => (
          <PostThumbnail key={post.id} data={post} />
        ))}
      </div>
      {!postsState.end && (
        <button
          className="home-posts__add"
          type="button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Add page
        </button>
      )}
    </>
  );
};

export default HomePosts;
