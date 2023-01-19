import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import './VideoComments.scss';

const VideoComments = ({ videoId, commentData /* commentCount */ }) => {
  return (
    <ul className="VideoComments">
      {/* <p className="commentCount">{commentCount} Comments</p> */}

      {commentData.map((comment) => (
        <li key={comment.id}>
          <div className="profileImg">
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user profile" />
          </div>
          <div className="commentMain">
            <div className="user">
              <p>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
              <span>{comment.snippet.topLevelComment.snippet.publishedAt} a day ago</span>
            </div>
            <div className="comment">{comment.snippet.topLevelComment.snippet.textDisplay}</div>
            <div className="btns">
              <div className="btn">
                <BiLike />
                <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
              </div>
              <div className="btn">
                <BiDislike />
              </div>
              <span>REPLY</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VideoComments;
