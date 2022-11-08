import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToNewsletter } from "../../../utils/thunks";

import "./newsletter.css";

const Newsletter = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const addUserEmail = (event) => {
    event.preventDefault();
    const userEmail = inputRef.current.value;
    dispatch(addToNewsletter({ email: userEmail }))
      .unwrap()
      .then((response) => {
        if (response.newsletter === "added") {
          toast.success(
            "You've been successfully added to our newsletter, congratulations!"
          );
        }
        if (response.newsletter === "failed") {
          toast.success("You are already subscribed to our newletter, great!");
        }
        inputRef.current.value = "";
      });
  };
  return (
    <div className="newsletter-container">
      <h1>Join our newsletter</h1>
      <Form className="mt-4" onSubmit={addUserEmail}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="your.email@mail.com"
            name="email"
            ref={inputRef}
          />
        </Form.Group>
        <Button className="mt-2" variant="primary" type="submit">
          Join newsletter
        </Button>
      </Form>
    </div>
  );
};

export default Newsletter;
