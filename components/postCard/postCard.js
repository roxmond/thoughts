'use client'
import Image from "next/image"
import { useState } from "react"
import { CiCircleChevUp , CiCircleChevDown, CiCircleMore, CiSaveUp2, CiLocationArrow1 } from 'react-icons/ci'
import '@/components/postCard/post-card.css'

export const PostCard = ({profileImg, account, date, time, post}) => {

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState(""); 
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [share, setShare] = useState(""); 

  const handleUpvote = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDownvote = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };
  const handleShareOpen = () => {
    // Close comment section if open before opening share section
    if (isCommentOpen) {
      setIsCommentOpen(false);
    }
    setIsShareOpen(!isShareOpen);
  };

  const handleShareChange = (e) => {
    setShare(e.target.value);
  };

  const handleCommentOpen = () => {
    // Close share section if open before opening comment section
    if (isShareOpen) {
      setIsShareOpen(false);
    }
    setIsCommentOpen(!isCommentOpen);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Implement comment submission logic here (e.g., send comment to server)
    console.log("Comment submitted:", comment);

    setComment(""); // Clear comment after submission
  };

  const likeColor = isLiked ? 'green' : ''; // Remove "default"
  const dislikeColor = isDisliked ? 'red' : ''; // Remove "default"

    return (
      <div className="post-card">
        <div className="post-name flex items-center">
            <Image src={profileImg} width={42} height={42} alt="profile card pic" className="post-profile-pic" priority />
            <div className="post-details">
                <p className="post-profile-name">{account}</p>
                <p className="post-date">{date} - {time}</p>
            </div>
        </div>

        <div className="post-body">
        {post}
        </div>

        <div className="post-actions flex justify-between">
        <div className="flex items-center cursor-pointer" onClick={handleUpvote} ><CiCircleChevUp className={`post-button ${likeColor}`}/><p className="action-texts">Like</p></div>
        <div className="flex items-center cursor-pointer" onClick={handleDownvote} ><CiCircleChevDown className={`post-button ${dislikeColor}`} /><p className="action-texts">Dislike</p></div>
        <div className="flex items-center cursor-pointer" onClick={handleCommentOpen}><CiCircleMore className="post-button" /><p className="action-texts">Comment</p></div>
        <div className="flex items-center cursor-pointer" onClick={handleShareOpen}><CiSaveUp2 className="post-button rotate" /><p className="action-texts">Share</p></div>

        </div>
        {isCommentOpen && (
        <div className="comment-section">
          <textarea
            className="new-comment"
            placeholder="Write a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
          
          <CiLocationArrow1  type='submit' className='post-comment-icon'  onClick={handleCommentSubmit}/>
          
        </div> )}
{isShareOpen && (
  <div className="share-section flex justify-between items-center">
    <div className="share1"></div>
    <div className="share1"></div>
    <div className="share1"></div>
    <div className="share1"></div>
    
    <CiSaveUp2 className="post-share-icon rotate"/>
    
  </div>
        
      )}
      </div>
      )
    }