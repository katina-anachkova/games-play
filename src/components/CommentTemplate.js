const Comment = ({ comment }) => {
    return (
        <li className="comment">
            <p>Content: {comment.comment}</p>
        </li>
    );
}

export default Comment;