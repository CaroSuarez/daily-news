import { useRef } from "react";
import { Form, Button } from "react-bootstrap";

import "./newsletter.css";

const Newsletter = () => {
  const inputRef = useRef();

  const addUserEmail = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    console.log(inputRef);
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
