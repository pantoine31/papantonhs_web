import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Antonis Papakonstantinou - Software Engineer @Netcompany.</p>
            <p>All rights reserved.</p>
            <div className="footer-links">
                <a href="https://linkedin.com/in/antoni-dev" target="_blank">LinkedIn</a>
                <a href="https://github.com/pantoine31" target="_blank">GitHub</a>
                <a href="/resume.pdf" target="_blank">Resume</a>
                <a href="mailto:antonhspap@icloud.com">Contact via E-mail</a>
            </div>

        </footer>
    );
}



