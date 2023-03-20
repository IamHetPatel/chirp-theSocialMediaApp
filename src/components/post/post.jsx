import "./post.css";
import {MoreVert} from '@mui/icons-material';

export default function post({post}) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/my.png" alt="" />
            <span className="postUsername">Het Patel</span>
            <span className="postTime">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post:)</span>
          <img className="postImg" src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">313 people like it</span>
          </div>
          <div className="postBottomRight">
            <spoan className="postCommentText">9 comments</spoan>
          </div>
        </div>

      </div>
    </div>
  )
}
