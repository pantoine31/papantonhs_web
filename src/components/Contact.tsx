import './link.css'

export default function Contact() {
  return (

    <div className="page-content">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <p>Looking to get in touch? Use any of the contact methods below to reach me. I respond to all messages and look forward to hearing from you!</p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>antonhspap@icloud.com</p>
            <p>apapako@netcompany.com</p>

          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href='https://www.linkedin.com/in/papantonios/' target="_blank" rel="noopener noreferrer">
              @Antonis Papakonstantinou
            </a>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <a href='https://github.com/pantoine31' target="_blank" rel="noopener noreferrer">
              @Pantoine31
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}
