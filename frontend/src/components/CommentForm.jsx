import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { useAuth0 } from "@auth0/auth0-react";

export const CommentForm = ({
  post_id,
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  initialComment = {user_id: "", post_id: ""}
}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
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

    setComment({
      ...comment,
      user_id: user.sub.substring(6),
      post_id: post_id,
      [name]: value,
    });
    console.log(comment);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (isLoading){
    return (
    <>
      <div className="loading d-flex justify-content-center align-items-center">
        <img src={Logo} className="loadingLogo" alt="" />
        <i class="bi bi-gear rotate"></i>
      </div>
    </>
    );
  }
  
  return (
    <Form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        placeholder={text}
        onChange={(e) => {
          handleChange(e);
          setText(e.target.value);
        }}
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
