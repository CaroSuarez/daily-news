import { Button, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./post-thumbnail.css";

const PostThumbnail = ({ data }) => {
  return (
    <div className="post-thumbnail">
      <figure>
        <img src={`${data.image}?${data.id}`} />
        <figcaption>
          {data.author} - {data.createdAt}
        </figcaption>
      </figure>
      <h1>{data.title}</h1>
      <p> {data.excerpt} </p>
      <LinkContainer className="to-post-detail" to={`article/${data.id}`}>
        <Button variant="light">Read more</Button>
      </LinkContainer>
    </div>
  );
};

export default PostThumbnail;
