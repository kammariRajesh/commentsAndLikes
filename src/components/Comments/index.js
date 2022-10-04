import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', initialList: []}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    if (name !== '') {
      this.setState(p => ({
        initialList: [...p.initialList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  commentChange = event => {
    this.setState({comment: event.target.value})
  }

  liking = id => {
    this.setState(p => ({
      initialList: p.initialList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleting = id => {
    const {initialList} = this.state
    const updatedList = initialList.filter(each => each.id !== id)
    return this.setState({initialList: updatedList})
  }

  render() {
    const {name, comment, initialList} = this.state
    const colorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    return (
      <div className="bg-container">
        <div>
          <div className="card">
            <form className="form-elements" onSubmit={this.onAddComment}>
              <p>Say Something about 4.0 Technologies</p>
              <input
                type="text"
                value={name}
                onChange={this.nameChange}
                className="input"
                placeholder="Your Name"
              />
              <textarea
                rows="4"
                cols="50"
                value={comment}
                onChange={this.commentChange}
                className="input"
                placeholder="Your Comment"
              />
              <button type="submit" className="add-btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
          <hr />
          <div className="comments-count-container">
            <div>
              <div className="comments-list">
                <p>{initialList.length}</p>
              </div>
            </div>
            <h1 className="comment-count-prg">Comments</h1>
          </div>
          <ul className="list-container">
            {initialList.map(each => (
              <CommentItem
                item={each}
                key={each.id}
                colorList={initialContainerBackgroundClassNames}
                liking={this.liking}
                deleting={this.deleting}
                colorClassName={colorClassName}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
