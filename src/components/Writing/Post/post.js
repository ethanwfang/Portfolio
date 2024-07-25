import React, { useState } from 'react';
import './post.css'; // Your Post CSS styles

const Post = ({ title, content, image, date }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <article className="post">
        <p  className="title" onClick={toggleContent}>{title}</p>
        {image && <img src={image} alt="Description" className="image" />} {/* Use the image prop as the src */}
        <p className="date" >{date}</p>
        {isContentVisible && <div>{content}</div>}
    </article>
  );
};

export default Post;