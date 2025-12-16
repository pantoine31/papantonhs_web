import { useEffect } from "react";
import "./link.css"; 

interface Job {
    title: string;
    company: string;
    date: string;
    description?: string;
}

const jobs: Job[] = [
    {
        title: "Junior Frontend Engineer",
        company: "Netcompany",
        date: "Sep 2025 – Present",
        description: "Developing responsive and modular frontend components with React and TypeScript. Collaborating with teams using Git workflows and maintaining consistency through design systems."
    },
    {
        title: "Junior Web Developer (Internship)",
        company: "Avnetο Marketers",
        date: "Nov 2024 – Feb 2025",
        description: "Gained hands-on experience in web development, working with React, Angular, PHP, MySQL, and GitHub during my internship."

    },
    {
        title: "Junior IT Engineer",
        company: "Digi Solutions",
        date: "Jul 2024 – Nov 2024",
        description: "Maintained and troubleshot IT infrastructure, including servers, switches, and firewalls, ensuring stable network performance and minimal downtime."

    },
    {
        title: "Contact Center Agent – Chat Support",
        company: "WIND/NOVA (ICAP)",
        date: "Feb 2022 – Jul 2024",
        description: "Provided customer support via phone and chat, handling 50+ daily requests and collaborating on major telecom projects (Wind Hellas, Nova), while developing strong communication and problem-solving skills."
    },
    {
        title: "Bachelor's Degree in Computer Science",
        company: "University of Piraeus",
        date: "Sep 2020 – Sep 2024",
        description: "Bachelor’s Degree in Computer Science (Grade: 7.49/10). Coursework included Web Development, Databases, Software Engineering, Data Structures, Algorithms, and Cybersecurity. Bachelor Thesis: 'Smart Cities: Privacy and Security'."

    },
];

export default function Proff() {

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section className="career-container">
            <h2 className="career-title">Career Journey</h2>

            <div className="career-timeline">
                {jobs.map((job, index) => (
                    <div key={index} className="career-item">
                        <div className="career-dot" />
                        <div className="career-card">
                            <h3 className="career-role">{job.title}</h3>
                            <p className="career-company">{job.company}</p>
                            <p className="career-date">{job.date}</p>
                            {job.description && (
                                <p className="career-description">{job.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="career">
                <h1>Career Info</h1>

                <div className="career-item">
                    <h3>My resume</h3>
                    <a href='https://github.com/pantoine31' target="_blank" rel="noopener noreferrer">
                        @Resume
                    </a>
                </div>
                <div className="career-item-rec">
                    <h3>Letters of recommendation</h3>
                    <a href='/pdfs/systatiki_epistoli_icap.pdf' target="_blank" rel="noopener noreferrer">
                        @Icap_Company
                    </a>
                    <a href='/pdfs/systatiki_epistoli_digiSolutions.pdf' target="_blank" rel="noopener noreferrer">
                        @Digi_Solutions
                    </a>
                    <a href='/pdfs/Systatiki-Papakonstantinou.pdf' target="_blank" rel="noopener noreferrer">
                        @Professor_Mr_Adreas_Menychtas
                    </a>
                    <a href='SYSTATIKI_KEPYES_PAPAKONSTANTINOU.pdf' target="_blank" rel="noopener noreferrer">
                        @Professor_Mr_Stefanos_Gkritzalis
                    </a>
                </div>
                <div className="career-item">
                    <h3>Bachelor Thesis</h3>
                    <a href='/pdfs/Thesis_papakonstantinou.pdf' target="_blank" rel="noopener noreferrer">
                        @BSc. Thesis
                    </a>
                </div>


            </div>
        </section>
    );
}
