import './index.css'

const CommentItem = props => {
  const {item, liking, deleting, colorClassName} = props
  const {name, comment, isLiked, id} = item
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColor = isLiked ? 'colored' : ''

  const likeStatus = () => liking(id)

  const onDelete = () => deleting(id)

  return (
    <li>
      <div className="card1">
        <div className={`letter ${colorClassName}`}>
          <p>{name[0]}</p>
        </div>
        <div className="card2">
          <div className="card3">
            <p className="name">{name}</p>
            <p className="time">less than a minute ego</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="card4">
        <div className="card5">
          <button type="button" className="like-btn" onClick={likeStatus}>
            <img src={likeImgUrl} alt="like" className="like-img" />
          </button>
          <p className={`like ${likeColor}`}>Like</p>
        </div>
        <button
          type="button"
          className="like-btn"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
