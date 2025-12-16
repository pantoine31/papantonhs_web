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
        <p>I was born on January 3rd, 2002, in Larisa, and the snow that day felt like it had a special presence — as if it wanted to welcome a new member of the city.</p>

        <p>Music is a great love of mine. If you ask me who my favorite artist is, I’ll never give you a fixed answer. Music changes with the day, with the mood, and I believe that’s exactly how it should be. You listen to what inspires you and helps you move forward each time.</p>

        <p>From a young age, I’ve been involved with the guitar and the bouzouki. For me, music was always an escape — a way to get away and express myself beyond words.</p>

        <p>My journey so far hasn’t always been easy, but there was always something pushing me to keep going. I graduated with honors from Falani General High School and continued my studies at the University of Piraeus, in the Department of Digital Systems, where I earned my degree with a 7.5.</p>

        <p>When I was 19, I decided that I wanted to enter the job market early in order to become independent from my family. I did — and I’m proud of that.</p>

        <p>My professional path began in customer phone support, then moved to chat support, and later into the world of programming and network infrastructure. Jobs that took me to beautiful places, from Ios to Rome, and introduced me to incredible people with unique stories.</p>

        <p>I’m interested in understanding how the world around me works. I like to explore and to learn.</p>

        <p>Then came the army. I spent three months in Avlona, and although they weren’t the best days, they helped me — or at least pushed me — to complain less. To face strange situations and, out of nothing, hold on to the positives and move forward. I met wonderful people, each with their own story. Beautiful.</p>

        <p>From my army experience, what I keep are the connections — strangers who became family — and the realization of who was truly by my side.</p>

        <p>From November 2024, when I entered the army, I also began creating this page. The goal was to have a place where I could gather my ideas and build something from scratch.</p>

        <p>This page is where I store my articles and my thoughts. I write often for personal pleasure. I write because it feels like one of the ways to give my ideas a “body,” but most of all, I write because I enjoy expressing myself.</p>

        <p>Above all, though, I like to observe. I observe people’s behaviors, their words, their gazes.</p>

        <p>I believe there are people who simply live — and people who observe and understand the world around them. I choose to be the one who observes and discovers the stories behind each moment. At least, I try to.</p>

        <p>Life is short — I’ve understood that. Everything has an expiration date. Even our existence. Even the now.</p>

        <p>Life is far too short to live someone else’s dreams. We must be true to ourselves, follow our own path, and do everything we possibly can if we truly believe in something.</p>

        <p>Every day is a new opportunity to begin again, to create our own moments, to write our own story. In the end, what remains are the moments we lived and the people we loved.</p>

        <p>We should be present, live with truth and passion, because life — no matter how short — can grow through the moments we create. Let’s make them count.</p>

        <p>I also live to understand, to feel, and to tell stories. Every day is a new chapter, and every encounter a small story. I collect moments, words, and thoughts that linger in the air and turn them into stories. For me, life isn’t simply about existing. It’s about discovering and sharing everything the world has to offer.</p>

        <p>To see beyond the obvious, to uncover the stories hidden in the shadows of everyday life. And as long as I exist, I will continue to observe. Because every person, every look, every random moment has something to say — and I’m here to listen.</p>

        <p>Welcome to my story.</p>

        <p><strong>“Think big, work hard, have fun, make history.”</strong></p>

      </div>
    </div>
  );
}
