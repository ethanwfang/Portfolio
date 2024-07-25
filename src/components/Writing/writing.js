// Writing.js
import React from 'react';
import './writing.css';
import Post from './Post/post.js'; // Make sure the path is correct
import monkeyImage from '../../assets/monkey.png';

const Writing = () => {
  // Sample data for posts. This could also come from an API or your state.
  const posts = [
    {
      id: 1,
      title: "Welcome and About this page",
      content: "This is my website, built using React, basic JavaScript, and CSS. " +
      "I intend to use this page to keep track of anything I'm reading, thoughts, and job experiences/reflections.",
      image: monkeyImage,
      date: "January 9, 2024"
    }
  ];

  return (
    <section id="writing">
      <div className="writingContent">
        {posts.map(post => (
          <Post key={post.id} title={post.title} image={post.image} content={post.content} date={post.date} />
        ))}
      </div>
    </section>
  );
};

export default Writing;
