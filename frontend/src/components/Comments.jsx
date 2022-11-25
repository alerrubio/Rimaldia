import "../components/css/comments.css";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";
import { getAllComments, createComment, deleteComment as DestroyDBComment, editComment } from '../services/CommentsService';
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../../api/api";

const Comments = ({ commentsUrl, currentUserId, post_id }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [PostComments, setPostComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  /*const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );*/
  const getReplies = (commentId) =>{
    /*backendComments.filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );*/
  }
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const newComment = (commentObj) => {
    createComment(commentObj).then((comment) => {
      setPostComments([comment, ...PostComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const editCommentCallback = (commentId, comment) => {
    editComment(commentId, comment).then(() => {
      const updatedBackendComments = getAllComments(post_id).then((comments) => {
        setPostComments(comments.data);
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  /*const deleteComment = (commentId) => {
    if (window.confirm("¿Estás seguro que quieres eliminar tu comentario?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };*/

  const destroyComment = (commentId) => {
    if (window.confirm("¿Estás seguro que quieres eliminar tu comentario?")) {
      DestroyDBComment(commentId).then(() => {
        
        const updatedBackendComments = getAllComments(post_id).then((comments) => {
          setPostComments(comments.data);
        });
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getAllComments(post_id).then((comments) => {
      setPostComments(comments.data);
    });
    /*getCommentsApi().then((data) => {
      setBackendComments(data);
    });*/
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comentarios</h3>
      <div className="comment-form-title">Escribe tu comentario</div>
      <CommentForm post_id={post_id} submitLabel="Comentar" handleSubmit={newComment} />
      <div className="comments-container">
        {PostComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={newComment}
            deleteComment={destroyComment}
            updateComment={editCommentCallback}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
