import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Form from 'react-bootstrap/Form';

const initialComment = {
  user_id: ""
}

const CommentForm = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { handleSubmit, submitLabel, hasCancelButton, handleCancel, initialText } = props;
  const [text, setText] = useState(initialText);
  const [comment, setComment] = useState(initialComment);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  useEffect(() => {
    setComment({
      ...comment,
      [name]: value,
    });
  }, [user]);
  
  return (
    <Form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={handleChange()}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </Form>
  );
};

export default CommentForm;
