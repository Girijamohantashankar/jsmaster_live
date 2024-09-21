"use client";
import "../../../styles/about.css";
import Navbar from "../navbar";
import team1 from "../../../public/assets/profile.png"
import Image from "next/image";

export default function About() {

    return (
        <>
            <Navbar />
            <div className="about_container">
                <section className="about_intro">
                    <h1>Abo<span>ut U</span>s</h1>
                    <p>
                        Welcome to <span>JSMaster</span>, your go-to platform for mastering <span>JavaScript</span>. Our mission is to provide top-notch <span>educational</span> resources and <span>interactive</span> tools to help you become a <span>proficient</span> JavaScript developer.
                    </p>
                </section>

                <section className="about_mission">
                    <h2>O<span className="orange">u</span>r Mission</h2>
                    <p>
                        At <span className="orange">JSMaster</span>, we believe in the power of Java<span className="or">Script</span> to build dynamic and engaging <span className="or">web</span> applications. Our goal is to empower developers at all levels with the knowledge and <span className="or">skills</span> to excel in their <span className="or">careers</span>.
                    </p>
                </section>

                <section className="about_team">
                    <h2>Me<span className="or">et</span> th<span className="or">e Te</span>am</h2>
                    <div className="team_member">
                        <Image src={team1} alt="Team Member 1" />
                        <h3>G<span className="or">iri</span>ja Sha<span className="or">nka</span>r Mo<span className="or">han</span>ta</h3>
                        <p>Co-Founder & Lead Instructor</p>
                    </div>
                    <div className="team_member">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9KrvjQGMWc0w6BNkKgiqJobI2rIJine7tg&s" alt="Team Member 2" />
                        <h3>A<span className="or">ji</span>t K<span className="or">um</span>ar</h3>
                        <p>Co-Founder & Senior Developer</p>
                    </div>

                </section>

                <section className="about_contact">
                    <h2>Con<span className="or">tac</span>t U<span className="or">s</span></h2>
                    <p>
                        Have questions or feedback? We would love to hear from you! Reach out to us at <a href="mailto:info@jsmaster.com">info@jsmaster.com</a>.
                    </p>
                </section>
            </div>
        </>
    );
}
