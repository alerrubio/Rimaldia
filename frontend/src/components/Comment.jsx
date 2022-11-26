import CommentForm from "./CommentForm";
import "../components/css/comments.css";
import { longDate } from "../utils/dateFormatter";

var datedb;

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.user_id /*&& replies.length === 0*/;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.user_id;
  const replyId = parentId ? parentId : comment._id;
  datedb = longDate(comment.createdAt);

  return (
    <div key={comment._id} className="comment">
      <div className="comment-image-container">
        <img src={comment.user_picture} style={{position: "relative"}}/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content d-flex flex-column justify-content-center align-items-start">
          <div className="comment-author">{comment.username}</div>
          <div className="comment-date">{datedb}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.text}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(comment._id, text)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {/*canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Responder
            </div>
            )*/}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "editing" })
              }
            >
              Editar
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment._id)}
            >
              Eliminar
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Responder"
            handleSubmit={(commentRes) => addComment(comment)}
          />
        )}
        {/*replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )*/}
      </div>
    </div>
  );
};

export default Comment;
