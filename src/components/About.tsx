import { useEffect } from 'react';
import './link.css';

export default function About() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="page-content">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Welcome! I'm a passionate developer and writer who loves sharing knowledge
          through technical articles and tutorials.
        </p>
        <p>I'm a Junior Front End Developer with a background in IT and network management. My journey started with hands-on technical support, where I learned that great technology is about solving real problems for real people.</p>
        <p>
          After completing my military service, I now focus on building modern, responsive web applications. As a Computer Science graduate, I enjoy transforming ideas into clean, functional digital solutions that users actually want to use.
        </p>
        <p>
          Currently, I'm pursuing an MSc in "Information Systems and Services" with a specialization in "Big Data and Analytics". This program is expanding my skills beyond front-end development, teaching me how to analyze complex data and extract meaningful insights that drive better decision-making.
        </p>
        <p>What excites me most is working at the intersection of development and data analytics—creating applications that not only look great but are powered by intelligent data insights.</p>
        <p>I believe in accountability, adaptability, and continuous learning. </p>
        <p>Whether working solo or with a team, I bring curiosity, initiative, and a drive to build technology that makes a difference.</p>
        
      </div>
    </div>
  );
}
