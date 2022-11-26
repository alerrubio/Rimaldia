import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createComment } from '../services/CommentsService';
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export const CommentForm = ({
  post_id,
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  initialComment = {user_id: "", post_id: post_id}
}) => {
  const { user, isLoading } = useAuth0();
  const [text, setText] = useState(initialText);
  const [comment, setComment] = useState(initialComment);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = async (event) => {
    event.preventDefault();
    
    //const res = await createComment(comment);
    //console.log(res);
    handleSubmit(comment);
    setText("");
    //window.location.reload();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setComment({
      ...comment,
      [name]: value,
    });
    console.log(comment);
  };

  useEffect(() => {
    console.log(user);
    setComment({
      ...comment,
      username: `${user.given_name} ${user.family_name}`,
      user_picture: user.picture,
      user_id: user.sub.substring(6),
    });
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
        name="text"
        className="comment-form-textarea"
        placeholder={text}
        onChange={(e) => {
          handleChange(e);
          setText(e.target.value);
        }}
      />
      <Button variant="peach" type="submit">
        {submitLabel}
      </Button>
      {hasCancelButton && (
        <Button
          variant="peach"
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      )}
    </Form>
  );
};

export default CommentForm;
