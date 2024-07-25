// Writing.js
import React from 'react';
import Post from '../Writing/Post/post.js';
import '../Writing/writing.css';


const Portfolio = () => {
  // Sample data for posts. This could also come from an API or your state.
  const posts = [
    {
        id: 1,
        title: "XRDImage",
        content: (
          <>
            <p>
              PyPi package containing all of my deep learning data preprocessing scripts I wrote for SDLE. 
              After my freshman year at CWRU, I decided to stay the summer in Cleveland to continue working 
              for my research lab. We had been making good progress on our scripts, and I wanted to learn 
              even more about computer vision and machine learning clustering. This ended up being one of 
              the main issues of the summer: how to segment and categorize X-Ray Diffraction rings.
            </p>
            <p>
              The package can be found <a href="https://pypi.org/project/XRDImage/" target="_blank" rel="noopener noreferrer">at this link</a>.
            </p>
          </>
        ),
    },
    {
        id: 2,
        title: "Sentiment Analysis Pipeline",
        content: (
            <>
              <p>
                This project was started right after the 2023 fall semester, heading into winter break. I wanted to learn about
                NLP, and this project was inspired by the Algorithmic Trading course's syllabus at CWRU.
              </p>
              <p>
                After watching a few videos, I got to work using NLTK to classify 
              </p>
            </>
          ),
      },
    {
      id: 3,
      title: "Asteroids",
      content: "This is the second post content.",
    },
    // Add more posts as needed
  ];

  return (
    <section id="writing">
      <div className="writingContent">
        {posts.map(post => (
          <Post key={post.id} title={post.title} content={post.content} date={post.date} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;