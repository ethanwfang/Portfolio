import React from 'react'
import './intro.css';


const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hey👋! I'm <span className="highlight" >Ethan</span>, and welcome to my portfolio site.</span>
                <p className="introText">I am an undergraduate student at Case Western Reserve University obtaining my B.S. in Computer Science,
                    secondary major B.A. in Finance, and a minor in Math.
                </p>
                <p className="introText">
                    My interests lie in the intersection of <span className="highlight">machine learning, AI, and the stock market</span>. After finishing undergrad, I look to obtain a graduate degree in financial engineering
                    or a related field to eventually become a quant.
                </p>
                <p className="introText">
                    Some of my interests outside of work include travel, tennis, and violin.
                </p>
                
            </div>
        </section>
    )
}

export default Intro;